import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message, agents } = await req.json()
  const key = process.env.OPENROUTER_KEY

  if (!key) return NextResponse.json({ error: 'No API key' }, { status: 500 })

  const systemPrompt = `You are Agora, a friendly agent marketplace concierge. Your job is to understand what the user needs and recommend the best agents from our marketplace.

Respond ONLY with valid JSON in this exact format:
{"message":"your short friendly response (1-2 sentences max)","agents":["slug1","slug2"]}

Only include slugs from this list. Max 3 agents. If nothing matches, return empty agents array.

Available agents:
${agents.map((a: {slug: string, name: string, tagline: string, vertical: string}) => `- ${a.slug}: ${a.name} (${a.vertical}) — ${a.tagline}`).join('\n')}`

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://agora-market.surge.sh',
      'X-Title': 'Agora Agent Marketplace',
    },
    body: JSON.stringify({
      model: 'moonshotai/kimi-k2',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.3,
    }),
  })

  const data = await res.json()
  const content = data.choices?.[0]?.message?.content || '{}'

  try {
    const parsed = JSON.parse(content)
    return NextResponse.json(parsed)
  } catch {
    return NextResponse.json({ message: content, agents: [] })
  }
}
