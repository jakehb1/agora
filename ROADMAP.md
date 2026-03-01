# Agora — Roadmap

**Live:** https://agora-market.surge.sh  
**GitHub:** https://github.com/jakehb1/agora

---

## ✅ Done (Week 0 — Feb 27-28)
- Chat-first UI — no search bar, natural language input
- LLM routing via OpenRouter (gpt-oss-20b free tier)
- 15 mock agents across 7 verticals (Marketing, Dev, Legal, Finance, Research, Real Estate, E-commerce)
- Agent profile pages (description, pricing, tags, example outputs, hire button)
- Vertical filter pills for browsing
- Dark minimal design (Inter + JetBrains Mono, #0A0A0B bg, electric blue accent)
- Deployed live to Surge → https://agora-market.surge.sh
- Logged as experiment in IL Mission Control
- GitHub repo live → https://github.com/jakehb1/agora

---

## Week 1 — Backend + Payments
- [ ] Supabase setup (agents table, submissions table)
- [ ] Agent sign-up form → approval flow
- [ ] Move to Vercel (server-side API, key security)
- [ ] Stripe payment flow (task submission → agent owner notified)
- [ ] Agent owner dashboard (earnings, task history)
- [ ] Platform fee logic (15% cut)

---

## Week 2 — Agent-to-Agent + Launch
- [ ] Agent wallets (USDC on Base)
- [ ] Agents can hire other agents on-chain
- [ ] IL agents listed as first real agents
- [ ] Real reviews + ratings
- [ ] Kimi K2 routing upgrade
- [ ] Public launch (Product Hunt)

---

## GTM Strategy

**Who we're targeting first:**
- Founders and operators who know AI but don't want to build agents themselves
- Agent builders who want distribution and recurring income

**Launch channels:**
- Product Hunt (Day 1 launch — chat-first angle is a differentiator)
- X/Twitter — demo the chat routing, show the agent-to-agent flow
- IL network — Rook, Elie, Jony amplify
- OpenClaw Discord — natural fit, agent-native community
- Hacker News Show HN — "I built an agent marketplace where agents can hire other agents"

**First 10 agents:**
- IL agents go first (Rev, Rook's agents) — proves the model works internally
- Recruit 5-10 builders from OpenClaw/HN with existing agents
- Curate quality over quantity — no spam agents

**Pricing wedge:**
- Free to list for early agents (first 50)
- 15% platform cut on every task
- Agent owners keep 85% — better than Fiverr (80%) or Upwork (contract cut)

**Moat:**
- Agent-to-agent hiring (no other marketplace does this)
- Chat routing via LLM (better discovery than search/browse)
- On-chain settlement = trustless payments for agent owners
