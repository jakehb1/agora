'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { agents } from '@/lib/agents'

interface AgentCard {
  slug: string
  name: string
  tagline: string
  pricePerTask: number
  rating: number
  vertical: string
}

interface Message {
  role: 'user' | 'agora'
  text: string
  agentCards?: AgentCard[]
}

const agentMap = Object.fromEntries(agents.map(a => [a.slug, a]))

const verticalColors: Record<string, string> = {
  Marketing: '#8B5CF6',
  Dev: '#3B82F6',
  Legal: '#F59E0B',
  Finance: '#22C55E',
  Research: '#EC4899',
  'Real Estate': '#F97316',
  'E-commerce': '#06B6D4',
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agora', text: "Hey! I'm Agora. Tell me what you need done and I'll find the right agent for you." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setLoading(true)

    try {
      const systemPrompt = `You are Agora, an agent marketplace concierge. You MUST respond with raw JSON only — no markdown, no code blocks, no explanation. Format: {"message":"1-2 sentence friendly reply","agents":["slug1","slug2"]}. Max 3 agent slugs. Only use slugs from this exact list:\n${agents.map(a => `${a.slug}: ${a.name} (${a.vertical}) — ${a.tagline}`).join('\n')}`

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://agora-market.surge.sh',
          'X-Title': 'Agora',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b:free',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMsg },
          ],
          temperature: 0.3,
        })
      })
      const raw = await res.json()
      let content = raw.choices?.[0]?.message?.content || '{}'
      // Strip markdown code blocks if present
      content = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
      // Extract JSON object if buried in text
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) content = jsonMatch[0]
      let data: {message?: string, agents?: string[]} = {}
      try { data = JSON.parse(content) } catch { data = { message: content, agents: [] } }
      const cards = (data.agents || []).map((slug: string) => agentMap[slug]).filter(Boolean)
      setMessages(prev => [...prev, { role: 'agora', text: data.message || "Here's what I found.", agentCards: cards }])
    } catch {
      setMessages(prev => [...prev, { role: 'agora', text: "Something went wrong. Try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: '#0A0A0B', fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 24px', borderBottom: '1px solid #27272A',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' }}>Agora</span>
        <Link href="#" style={{ fontSize: 12, color: '#52525B', textDecoration: 'none' }}>Browse agents</Link>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 16px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '80%', padding: '10px 14px', borderRadius: 12,
                background: msg.role === 'user' ? '#3B82F6' : '#111113',
                border: msg.role === 'agora' ? '1px solid #27272A' : 'none',
                fontSize: 14, color: '#FAFAFA', lineHeight: 1.5,
              }}>
                {msg.text}
              </div>

              {/* Agent cards */}
              {msg.agentCards && msg.agentCards.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8, width: '100%', maxWidth: '80%' }}>
                  {msg.agentCards.map(agent => (
                    <Link key={agent.slug} href={`/agents/${agent.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        background: '#111113', border: '1px solid #27272A', borderRadius: 10,
                        padding: '12px 14px', cursor: 'pointer', transition: 'border-color 0.15s',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#3B82F6')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = '#27272A')}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                            background: verticalColors[agent.vertical] || '#3B82F6',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 13, fontWeight: 700, color: '#fff',
                          }}>
                            {agent.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: '#FAFAFA' }}>{agent.name}</div>
                            <div style={{ fontSize: 12, color: '#A1A1AA', marginTop: 1 }}>{agent.tagline}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#FAFAFA', fontFamily: 'JetBrains Mono, monospace' }}>${agent.pricePerTask}</div>
                          <div style={{ fontSize: 11, color: '#52525B' }}>per task</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{
                padding: '10px 14px', borderRadius: 12, background: '#111113',
                border: '1px solid #27272A', fontSize: 14, color: '#52525B',
              }}>
                Finding the right agents...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: '16px', borderTop: '1px solid #27272A', background: '#0A0A0B' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', gap: 8 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="What do you need done?"
            style={{
              flex: 1, height: 48, padding: '0 16px', borderRadius: 10,
              background: '#111113', border: '1px solid #27272A', outline: 'none',
              fontSize: 14, color: '#FAFAFA', fontFamily: 'Inter, system-ui, sans-serif',
            }}
            onFocus={e => (e.target.style.borderColor = '#3B82F6')}
            onBlur={e => (e.target.style.borderColor = '#27272A')}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            style={{
              height: 48, padding: '0 20px', borderRadius: 10, border: 'none',
              background: loading || !input.trim() ? '#27272A' : '#3B82F6',
              color: '#FAFAFA', fontSize: 14, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
