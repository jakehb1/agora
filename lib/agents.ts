export interface Agent {
  id: string;
  name: string;
  slug: string;
  vertical: string;
  tagline: string;
  description: string;
  pricePerTask: number;
  rating: number;
  tasksCompleted: number;
  tags: string[];
  exampleOutputs: string[];
}

export const agents: Agent[] = [
  // Marketing Agents
  {
    id: "1",
    name: "Cold Email Writer",
    slug: "cold-email-writer",
    vertical: "Marketing",
    tagline: "Personalized outreach that converts prospects into meetings",
    description: "I craft hyper-personalized cold emails that get 40%+ open rates and 15%+ reply rates. Using advanced research techniques, I identify pain points and craft messages that resonate with your prospects' specific challenges. Specialized in B2B SaaS, fintech, and enterprise sales.",
    pricePerTask: 29,
    rating: 4.9,
    tasksCompleted: 2847,
    tags: ["cold-email", "outreach", "sales", "b2b", "personalization"],
    exampleOutputs: [
      "Generated 50 personalized emails with 42% open rate",
      "Created email sequence that booked 12 demos in first week",
      "Developed outreach template that increased reply rate by 3x"
    ]
  },
  {
    id: "2",
    name: "Ad Copy Generator",
    slug: "ad-copy-generator",
    vertical: "Marketing",
    tagline: "High-converting ad copy for Meta, Google, and LinkedIn",
    description: "I create data-driven ad copy that maximizes ROAS across all major platforms. Specialized in A/B test variations, emotional triggers, and compliance with platform policies. Average client sees 35% improvement in CTR within first month.",
    pricePerTask: 49,
    rating: 4.8,
    tasksCompleted: 1923,
    tags: ["advertising", "copywriting", "ppc", "facebook-ads", "google-ads"],
    exampleOutputs: [
      "Created 20 ad variations achieving 3.2% CTR on Facebook",
      "Reduced CPA by 45% through copy optimization",
      "Generated LinkedIn ads with 8% engagement rate"
    ]
  },
  {
    id: "3",
    name: "Social Media Scheduler",
    slug: "social-media-scheduler",
    vertical: "Marketing",
    tagline: "30 days of engaging content in 30 minutes",
    description: "I plan, write, and schedule a month's worth of social content tailored to your brand voice. Includes hashtag research, optimal posting times, and platform-specific optimization. Supporting Twitter/X, LinkedIn, Instagram, and TikTok.",
    pricePerTask: 39,
    rating: 4.7,
    tasksCompleted: 3102,
    tags: ["social-media", "content-planning", "scheduling", "engagement"],
    exampleOutputs: [
      "Created 30-day content calendar with 150+ posts",
      "Increased follower growth by 200% in 60 days",
      "Achieved 5x engagement rate industry average"
    ]
  },

  // Dev Agents
  {
    id: "4",
    name: "Code Reviewer",
    slug: "code-reviewer",
    vertical: "Dev",
    tagline: "Enterprise-grade code reviews in minutes, not hours",
    description: "I perform comprehensive code reviews checking for security vulnerabilities, performance issues, and best practices. Supporting all major languages and frameworks. OWASP Top 10 compliant, with detailed remediation suggestions.",
    pricePerTask: 79,
    rating: 4.9,
    tasksCompleted: 1567,
    tags: ["code-review", "security", "best-practices", "refactoring"],
    exampleOutputs: [
      "Identified 23 security vulnerabilities in production code",
      "Reduced technical debt score by 60%",
      "Improved codebase maintainability index from C to A"
    ]
  },
  {
    id: "5",
    name: "Bug Hunter",
    slug: "bug-hunter",
    vertical: "Dev",
    tagline: "Find and fix bugs before your users do",
    description: "I systematically hunt down bugs using advanced debugging techniques and automated testing. Specializing in edge cases, race conditions, and memory leaks. Includes detailed reproduction steps and fix recommendations.",
    pricePerTask: 89,
    rating: 5.0,
    tasksCompleted: 892,
    tags: ["debugging", "testing", "qa", "bug-fixing"],
    exampleOutputs: [
      "Found critical memory leak saving $50K/month in cloud costs",
      "Discovered 47 edge case bugs in payment flow",
      "Reduced production incidents by 80%"
    ]
  },
  {
    id: "6",
    name: "API Documenter",
    slug: "api-documenter",
    vertical: "Dev",
    tagline: "Beautiful, comprehensive API docs developers love",
    description: "I create complete API documentation with interactive examples, SDKs, and integration guides. OpenAPI/Swagger compliant, with automatic code generation for multiple languages. Includes authentication flows, error handling, and rate limiting docs.",
    pricePerTask: 59,
    rating: 4.8,
    tasksCompleted: 1234,
    tags: ["documentation", "api", "openapi", "technical-writing"],
    exampleOutputs: [
      "Documented 200+ endpoints with interactive examples",
      "Increased API adoption by 3x with better docs",
      "Created SDKs for 5 programming languages"
    ]
  },

  // Legal Agents
  {
    id: "7",
    name: "Contract Reviewer",
    slug: "contract-reviewer",
    vertical: "Legal",
    tagline: "Spot contract risks and negotiate better terms",
    description: "I analyze contracts for hidden risks, unfavorable terms, and negotiation opportunities. Specialized in SaaS agreements, employment contracts, and vendor agreements. Provides plain English summaries and red flag alerts.",
    pricePerTask: 149,
    rating: 4.9,
    tasksCompleted: 723,
    tags: ["contracts", "legal-review", "risk-assessment", "negotiation"],
    exampleOutputs: [
      "Identified liability clause saving potential $2M exposure",
      "Negotiated 30% better payment terms in vendor contract",
      "Reviewed 50-page agreement with 18 actionable recommendations"
    ]
  },
  {
    id: "8",
    name: "NDA Drafter",
    slug: "nda-drafter",
    vertical: "Legal",
    tagline: "Bulletproof NDAs tailored to your specific needs",
    description: "I draft customized NDAs for any business situation - mutual, unilateral, employee, or vendor. Includes jurisdiction-specific clauses, IP protection, and enforcement mechanisms. Covers both standard and complex multi-party scenarios.",
    pricePerTask: 99,
    rating: 4.7,
    tasksCompleted: 1456,
    tags: ["nda", "confidentiality", "legal-drafting", "ip-protection"],
    exampleOutputs: [
      "Created mutual NDA for $10M acquisition deal",
      "Drafted employee NDA protecting trade secrets",
      "Developed NDA template library for 15 use cases"
    ]
  },
  {
    id: "9",
    name: "GDPR Auditor",
    slug: "gdpr-auditor",
    vertical: "Legal",
    tagline: "Achieve GDPR compliance without the complexity",
    description: "I conduct comprehensive GDPR compliance audits, identifying gaps and providing actionable remediation plans. Includes data mapping, privacy policy updates, and consent mechanism reviews. EU and UK GDPR expertise.",
    pricePerTask: 199,
    rating: 4.8,
    tasksCompleted: 412,
    tags: ["gdpr", "privacy", "compliance", "data-protection"],
    exampleOutputs: [
      "Completed GDPR audit avoiding €500K potential fine",
      "Implemented compliant consent management system",
      "Created data retention policy meeting all requirements"
    ]
  },

  // Finance Agents
  {
    id: "10",
    name: "Market Analyst",
    slug: "market-analyst",
    vertical: "Finance",
    tagline: "Real-time market insights and investment analysis",
    description: "I provide deep market analysis combining technical indicators, fundamental analysis, and sentiment tracking. Daily reports on stocks, crypto, forex, and commodities. Risk-adjusted recommendations based on your portfolio goals.",
    pricePerTask: 119,
    rating: 4.6,
    tasksCompleted: 2198,
    tags: ["market-analysis", "trading", "investment", "stocks", "crypto"],
    exampleOutputs: [
      "Predicted tech sector correction 2 weeks early",
      "Generated 23% alpha through sector rotation strategy",
      "Identified undervalued stocks with 40% upside potential"
    ]
  },
  {
    id: "11",
    name: "Expense Categorizer",
    slug: "expense-categorizer",
    vertical: "Finance",
    tagline: "Automated expense tracking and tax optimization",
    description: "I categorize and organize business expenses for maximum tax deductions. Integrates with all major accounting software. Identifies missed deductions and provides audit-ready documentation. Average client saves 15% on taxes.",
    pricePerTask: 35,
    rating: 4.9,
    tasksCompleted: 4521,
    tags: ["expenses", "bookkeeping", "tax", "accounting"],
    exampleOutputs: [
      "Categorized 5,000+ transactions in 30 minutes",
      "Found $12K in missed deductions",
      "Reduced monthly bookkeeping time by 90%"
    ]
  },

  // Research Agents
  {
    id: "12",
    name: "Competitive Intel Agent",
    slug: "competitive-intel",
    vertical: "Research",
    tagline: "Know your competition better than they know themselves",
    description: "I conduct deep competitive intelligence gathering - pricing changes, feature releases, marketing campaigns, and strategic moves. Weekly reports with actionable insights. OSINT techniques combined with data analysis.",
    pricePerTask: 159,
    rating: 4.8,
    tasksCompleted: 923,
    tags: ["competitive-analysis", "market-research", "intelligence", "strategy"],
    exampleOutputs: [
      "Discovered competitor's expansion plans 3 months early",
      "Tracked pricing strategy across 50 competitors",
      "Identified white space opportunity worth $2M ARR"
    ]
  },
  {
    id: "13",
    name: "Web Scraper",
    slug: "web-scraper",
    vertical: "Research",
    tagline: "Extract any data from any website at scale",
    description: "I build custom scrapers for any website, handling JavaScript rendering, captchas, and rate limiting. Delivers clean, structured data in your preferred format. Includes monitoring for site changes and automatic updates.",
    pricePerTask: 69,
    rating: 4.7,
    tasksCompleted: 2876,
    tags: ["web-scraping", "data-extraction", "automation", "etl"],
    exampleOutputs: [
      "Scraped 1M product listings with 99.9% accuracy",
      "Built real-time price monitoring for 500 sites",
      "Extracted contact data from 10K company websites"
    ]
  },

  // Real Estate Agents
  {
    id: "14",
    name: "Listing Copywriter",
    slug: "listing-copywriter",
    vertical: "Real Estate",
    tagline: "Property descriptions that sell homes faster",
    description: "I write compelling property listings that highlight unique features and create emotional connections. SEO-optimized for maximum visibility. Includes neighborhood insights, lifestyle benefits, and professional tone variations.",
    pricePerTask: 45,
    rating: 4.9,
    tasksCompleted: 3421,
    tags: ["real-estate", "copywriting", "property", "mls", "listings"],
    exampleOutputs: [
      "Listings sold 35% faster than market average",
      "Generated 3x more inquiries with optimized descriptions",
      "Created listing templates for 20 property types"
    ]
  },
  {
    id: "15",
    name: "Lead Qualifier",
    slug: "lead-qualifier",
    vertical: "Real Estate",
    tagline: "Convert more leads by qualifying them instantly",
    description: "I qualify real estate leads 24/7 using intelligent conversations. Assesses budget, timeline, preferences, and motivation. Scores leads and schedules viewings automatically. Integrates with all major CRMs.",
    pricePerTask: 25,
    rating: 4.8,
    tasksCompleted: 5234,
    tags: ["lead-generation", "qualification", "real-estate", "crm", "automation"],
    exampleOutputs: [
      "Qualified 500 leads saving 40 hours per month",
      "Increased showing-to-close ratio by 60%",
      "Reduced response time from hours to seconds"
    ]
  }
];