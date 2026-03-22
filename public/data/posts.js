// data/posts.js — Single source of truth for all blog posts.
// To add a new post: add an object to the POSTS array below and it will
// automatically appear on index.html, blogs.html, and be renderable via post.html?id=<id>

const POSTS = [
  {
    id: 1,
    title: "Stripe: The Infrastructure Backbone of the Internet Economy",
    date: "2024-03-15",
    summary: "A deep dive into how Stripe quietly became the financial OS for millions of businesses — and whether the valuation still makes sense.",
    tags: ["Fintech", "B2B SaaS", "Payments", "Late Stage"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Payment terminal on a counter",
    oneLiner: "Stripe is the payment and financial infrastructure platform that powers online commerce for millions of businesses worldwide.",
    theProblem: "Before Stripe, accepting payments online required navigating a labyrinth of merchant accounts, payment processors, and bespoke integrations that could take weeks or months. Developers had to deal with inconsistent APIs, archaic bank relationships, and endless compliance hurdles. Small teams were effectively locked out of global commerce.",
    foundersBackground: "Patrick and John Collison founded Stripe in 2010. Patrick was 21 and John was 19. Both are from Dromineer, a small village in Ireland. They had previously built and sold Auctomatic, an auction management platform, for ~$5M. Their frustration with existing payment solutions was visceral and personal — they had lived the pain firsthand as developers.",
    businessModel: "Stripe charges 2.9% + $0.30 per successful card transaction for its core payments product. Beyond payments, it has expanded into a full suite of revenue-generating products: Stripe Connect (marketplace payments), Stripe Capital (business lending), Stripe Issuing (card issuance), Stripe Treasury (banking-as-a-service), and Stripe Tax. This product diversification means Stripe captures more revenue per customer over time.",
    fundingHistory: [
      { round: "Seed", date: "2010", amount: "$2M", investors: "Peter Thiel, Elon Musk, Sequoia Capital" },
      { round: "Series A", date: "2011", amount: "$18M", investors: "Sequoia Capital, General Catalyst" },
      { round: "Series B", date: "2012", amount: "$20M", investors: "Sequoia Capital, General Catalyst, Andreessen Horowitz" },
      { round: "Series C", date: "2014", amount: "$80M", investors: "Founders Fund, Andreessen Horowitz, Redpoint" },
      { round: "Series G", date: "2021", amount: "$600M", investors: "Allianz, AXA, Baillie Gifford, Fidelity" }
    ],
    marketSize: "The global payments market processed over $8 trillion in digital payments in 2023. Stripe addresses the developer-first segment of this market, plus adjacent markets in embedded finance and banking-as-a-service. The total addressable market is conservatively estimated at $1 trillion in annual revenue opportunity by 2030.",
    competitiveLandscape: "Stripe competes with legacy processors like Adyen, PayPal/Braintree, and Square on the merchant-facing side. On infrastructure, it competes with AWS Payment Cryptography and various banking partners. Its moat comes from developer experience, comprehensive API documentation, and the network effects of its ecosystem of integrations and partners.",
    keyMetrics: [
      { label: "TPV (Total Payment Volume)", value: "$1T+", note: "2023 estimate" },
      { label: "Revenue", value: "$14B+", note: "2023 estimate" },
      { label: "Take Rate", value: "~1.4%", note: "blended across all products" },
      { label: "Users / Customers", value: "4M+ businesses", note: "across 50+ countries" },
      { label: "Last Valuation", value: "$65B", note: "March 2023 down round from $95B peak" }
    ],
    whyNow: "The shift to embedded finance — where every software company becomes a financial services company — is accelerating. Stripe's suite of banking and lending products positions it perfectly to capture this megatrend. Additionally, global expansion into high-growth markets (India, Southeast Asia, Latin America) represents a significant untapped runway.",
    risksAndChallenges: "Regulatory risk is significant: financial services is one of the most heavily regulated industries globally. Stripe's dependency on card networks (Visa/Mastercard) means it is ultimately at the mercy of interchange fee structures. Competition from Adyen and PayPal is intensifying, especially in enterprise. The IPO delay (now approaching 14 years as a private company) creates employee retention and liquidity pressure.",
    myVerdict: "bull",
    verdictText: "Stripe has built a durable, compounding business with genuine network effects and a developer community that functions as a powerful distribution moat. The current $65B valuation, while still high in absolute terms, represents a significant discount from peak and is arguably justified given the revenue trajectory. The path to an IPO, when it comes, should catalyze significant value realization.",
    ratings: {
      team: 5,
      market: 5,
      product: 5,
      traction: 4
    }
  },
  {
    id: 2,
    title: "Notion: From Note-Taking App to Workplace OS",
    date: "2024-02-28",
    summary: "Notion redefined productivity software with its all-in-one workspace. But as it matures and competition from Microsoft and Atlassian intensifies, can it hold its ground?",
    tags: ["SaaS", "Productivity", "B2B", "Series C"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Open notebook and laptop on a desk",
    oneLiner: "Notion is an all-in-one connected workspace that combines notes, docs, wikis, databases, and project management into a single, flexible platform.",
    theProblem: "Modern teams use an average of 8+ different tools for documentation, task management, wikis, and collaboration. This fragmentation creates context switching overhead, information silos, and a tangle of integrations that slow teams down. The promise of a single, customizable workspace that replaces multiple point solutions is compelling.",
    foundersBackground: "Ivan Zhao and Simon Last co-founded Notion in 2013, initially struggling through several pivots. Zhao, born in China and raised in Canada, studied cognitive science at UBC. The team's deep obsession with human-computer interaction and tool design shaped Notion's unusually flexible, block-based architecture. An early near-death experience (the company nearly ran out of money in 2015) gave the founders a resilience-first culture.",
    businessModel: "Freemium SaaS model. Free plan is generous (unlimited pages, limited block history). Paid tiers: Plus ($10/user/month), Business ($18/user/month), Enterprise (custom pricing). Notion also monetizes through its AI add-on ($8/user/month). The land-and-expand motion works well: individuals discover Notion, become power users, then advocate for team adoption.",
    fundingHistory: [
      { round: "Seed", date: "2015", amount: "$2M", investors: "Various angels" },
      { round: "Series A", date: "2019", amount: "$10M", investors: "Index Ventures" },
      { round: "Series B", date: "2020", amount: "$50M", investors: "Index Ventures, Coatue Management" },
      { round: "Series C", date: "2021", amount: "$275M", investors: "Sequoia Capital, Coatue Management" }
    ],
    marketSize: "The global collaboration software market is projected to reach $48B by 2027. Notion addresses the productivity, documentation, and project management categories simultaneously. If the 'workplace OS' vision succeeds, the addressable market expands to include the $50B+ enterprise software segment currently dominated by Microsoft 365 and Google Workspace.",
    competitiveLandscape: "Notion faces competition from multiple directions: Confluence (Atlassian) for enterprise wikis, Coda for database-heavy workflows, Linear for engineering project management, and Obsidian for personal knowledge management. Most critically, Microsoft (with Loop and Copilot integration in Teams) and Google (with Spaces) have the distribution advantage to commoditize the core use case.",
    keyMetrics: [
      { label: "ARR", value: "$350M+", note: "2023 estimate" },
      { label: "Users", value: "30M+", note: "registered users globally" },
      { label: "Paying Customers", value: "4M+ paid seats", note: "est." },
      { label: "NPS Score", value: "55+", note: "among top SaaS products" },
      { label: "Last Valuation", value: "$10B", note: "Series C, Nov 2021" }
    ],
    whyNow: "The remote-first and hybrid work revolution permanently elevated the importance of async documentation and team wikis. Notion was perfectly positioned to capture this shift. The launch of Notion AI adds a new growth vector: the 'intelligent workspace' category is nascent and Notion has a head start with its flexible data model.",
    risksAndChallenges: "The biggest risk is commoditization by Microsoft and Google, who can bundle Notion-like functionality into existing enterprise agreements at little marginal cost. Notion's current $10B valuation (on ~$350M ARR) implies a ~29x revenue multiple — aggressive for a company facing bundling pressure. Churn among free users converting to paying customers remains a known challenge.",
    myVerdict: "neutral",
    verdictText: "Notion is an exceptional product with genuine user love, but the competitive dynamics are challenging. The moat — user-created templates, the flexibility of the block model, community — is real but not unassailable. The $10B valuation bakes in significant execution on the enterprise and AI roadmap. Worth watching, but not a screaming buy at current implied multiples.",
    ratings: {
      team: 4,
      market: 4,
      product: 5,
      traction: 3
    }
  },
  {
    id: 3,
    title: "WeWork: A Cautionary Tale in Narrative-Driven Investing",
    date: "2024-01-20",
    summary: "WeWork promised to 'elevate the world's consciousness' while renting desks. How did one of history's most overfunded startups collapse — and what can investors learn?",
    tags: ["Real Estate", "PropTech", "Post-Mortem", "IPO"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Modern open-plan office coworking space",
    oneLiner: "WeWork was a commercial real estate company that positioned itself as a tech startup, offering flexible coworking spaces — before its spectacular near-collapse.",
    theProblem: "The traditional commercial office lease is fundamentally broken for startups and small teams: 5–10 year lease terms, massive upfront capital requirements, and inflexible space allocation. WeWork offered month-to-month flexibility, community, and furnished, amenity-rich offices. This was a genuinely valuable product — the mistake was in the valuation, not the product.",
    foundersBackground: "Adam Neumann co-founded WeWork in 2010 with Miguel McKelvey. Neumann was a charismatic, visionary (and, ultimately, erratic) founder who convinced SoftBank and others that WeWork was a technology company at its core. McKelvey, the quieter creative director, provided operational grounding that was often overshadowed by Neumann's showmanship. Neumann's personal behavior — including self-dealing, drug use at company events, and a trademark transaction where he charged WeWork $6M for the 'We' brand — became central to the company's downfall.",
    businessModel: "WeWork's model was fundamentally a real estate arbitrage: sign long-term leases at wholesale rates, subdivide and sub-lease at retail rates on flexible terms. The company was structurally short on flexibility (long-term liabilities) and long on obligation (short-term revenues). In a downturn, tenants could leave but WeWork's lease obligations remained — a fatal mismatch. Revenue grew rapidly but unit economics at the building level were deeply negative for years.",
    fundingHistory: [
      { round: "Series A", date: "2011", amount: "$17M", investors: "Benchmark" },
      { round: "Series B", date: "2012", amount: "$40M", investors: "Benchmark, DAG Ventures" },
      { round: "SoftBank Investment", date: "2017", amount: "$4.4B", investors: "SoftBank Vision Fund" },
      { round: "SoftBank Follow-on", date: "2019", amount: "$2B", investors: "SoftBank" },
      { round: "Total Raised", date: "2010–2019", amount: "$22B+", investors: "Various" }
    ],
    marketSize: "The global flexible workspace market was valued at ~$26B in 2019 and was growing rapidly. WeWork at its peak claimed it would house 1 in 4 office workers in major cities. The actual market, stripped of the tech premium narrative, was a niche segment of the broader $800B+ commercial real estate market.",
    competitiveLandscape: "IWG/Regus was a profitable, scaled operator of flexible workspace years before WeWork and was largely ignored by investors seduced by the WeWork narrative. Other competitors include Industrious (acquired by CBRE), Convene, and increasingly, traditional landlords offering their own flex products. The market proved intensely competitive with thin margins — the exact opposite of a software business.",
    keyMetrics: [
      { label: "Peak Valuation", value: "$47B", note: "early 2019" },
      { label: "Revenue (2019)", value: "$3.5B", note: "annualized" },
      { label: "Net Loss (2019)", value: "-$3.2B", note: "before adjustments" },
      { label: "Lease Obligations", value: "$47B+", note: "at time of S-1 filing" },
      { label: "IPO Outcome", value: "Withdrawn", note: "September 2019; bankruptcy 2023" }
    ],
    whyNow: "Flexible work was genuinely a tailwind — remote and hybrid work trends were accelerating pre-pandemic. The problem wasn't the 'why now' thesis; it was the unit economics, governance failures, and a CEO who used company funds as a personal ATM.",
    risksAndChallenges: "WeWork's risks were hiding in plain sight in its S-1: $47B in long-term lease obligations against a company losing money at scale; a CEO with unchecked power through supervoting shares; related-party transactions of questionable legality; and a 'community-adjusted EBITDA' metric that added back almost every cost to show profitability. The lesson: when a company invents its own profitability metric, run.",
    myVerdict: "bear",
    verdictText: "WeWork is a masterclass in how narrative can temporarily override fundamentals. The product was real and the market was real, but the governance, unit economics, and leverage profile made the 2019 IPO valuation indefensible. Sophisticated investors who relied on narrative rather than numbers suffered significant losses. The eventual bankruptcy in 2023 was, in hindsight, inevitable from the moment the S-1 was filed.",
    ratings: {
      team: 1,
      market: 3,
      product: 3,
      traction: 2
    }
  }
];

// Make available in both ES module and classic script environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = POSTS;
}
