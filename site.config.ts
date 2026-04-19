export const siteConfig = {
  business: {
    name: "ClarityDesk",
    tagline: "Support That Understands",
    description: "ClarityDesk deploys AI agents that resolve customer tickets, draft context-aware responses, and escalate intelligently. It learns from your knowledge base and past conversations to deliver faster, more accurate support at scale.",
    email: "hello@claritydesk.support",
    domain: "claritydesk.support",
    address: "800 Market St, Suite 400, San Francisco, CA 94102, United States",
  },

  theme: {
    mode: "dark" as const,
    designStyle: "bold" as const,
    background: "#244855",
    foreground: "#FBE9D0",
    surface1: "#2F5563",
    surface2: "#3E5B64",
    primary: {
      300: "#F19A8F",
      400: "#EC7666",
      500: "#E64833",
      600: "#C43D2B",
      700: "#A13224",
    },
    accent: {
      300: "#C2D2D2",
      400: "#ACC2C2",
      500: "#90AEAD",
      600: "#7A9493",
    },
  },

  hero: {
    badge: "Next-Gen AI Support Platform",
    headline: "Your Customers Deserve",
    headlineHighlight: "Instant, Intelligent Support",
    subheadline: "ClarityDesk learns from every conversation. It auto-resolves 80% of tickets, drafts perfect replies for the rest, and escalates only when it truly matters — so your team can focus on what humans do best.",
    primaryCta: "Get Started",
    secondaryCta: "See It In Action",
    stats: [
      { value: "80%", label: "Auto-Resolution" },
      { value: "<30s", label: "Avg Response" },
      { value: "10M+", label: "Tickets Resolved" },
      { value: "4.9/5", label: "CSAT Score" },
    ],
  },

  nav: {
    items: [
      { name: "Features", path: "/#features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Resources", path: "/legal" },
      { name: "Contact", path: "/contact" },
    ],
    topBarText: "✨ New: Smart Escalation Engine — route tickets to the right agent, instantly",
    ctaText: "Get Started",
    signInText: "Sign In",
    subtitle: "AI Support Platform",
  },

  features: [
    {
      title: "AI Ticket Resolution",
      description: "ClarityDesk reads, understands, and resolves common support tickets automatically — using your knowledge base and historical conversations as its foundation.",
      highlight: "80% resolved without human intervention",
      iconName: "Bot",
    },
    {
      title: "Smart Response Drafting",
      description: "For tickets that need a human touch, ClarityDesk drafts context-aware replies your agents can review and send in one click. No more starting from scratch.",
      highlight: "60% faster agent response time",
      iconName: "Pen",
    },
    {
      title: "Intelligent Escalation",
      description: "AI detects sentiment, urgency, and complexity to route tickets to the right team member at the right time. No more misrouted issues or angry customers.",
      highlight: "Sentiment-aware routing engine",
      iconName: "Workflow",
    },
    {
      title: "Knowledge Base Sync",
      description: "Connect your docs, FAQs, and help center articles. ClarityDesk continuously learns from new content to keep its answers accurate and current.",
      highlight: "Always learning, always improving",
      iconName: "BookOpen",
    },
    {
      title: "Omnichannel Inbox",
      description: "Email, live chat, Slack, Teams, social — every conversation in one unified inbox. Your agents never have to switch between tools again.",
      highlight: "One inbox for every channel",
      iconName: "Inbox",
    },
    {
      title: "Real-Time Analytics",
      description: "Track resolution rates, agent performance, ticket trends, and AI accuracy from a single dashboard. Spot bottlenecks before they become problems.",
      highlight: "Actionable insights in real time",
      iconName: "BarChart3",
    },
  ],

  featureBadges: [
    { iconName: "Zap", label: "Instant Responses" },
    { iconName: "Shield", label: "Enterprise Security" },
    { iconName: "Globe", label: "Multi-Language" },
    { iconName: "Headphones", label: "Omnichannel" },
    { iconName: "Brain", label: "Self-Learning AI" },
  ],

  howItWorks: [
    { step: "01", title: "Connect Your Channels", description: "Integrate email, chat, Slack, and your help desk platform in minutes", iconName: "Mail" },
    { step: "02", title: "Train on Your Data", description: "ClarityDesk ingests your knowledge base, past tickets, and SOPs to build understanding", iconName: "Brain" },
    { step: "03", title: "AI Resolves & Drafts", description: "Incoming tickets are auto-triaged, answered, or escalated with full context", iconName: "Bot" },
    { step: "04", title: "Your Team Stays in Control", description: "Agents review AI drafts, handle escalations, and continuously improve the model", iconName: "Users" },
  ],

  benefits: [
    { title: "80% Faster Resolution", description: "AI handles repetitive tickets instantly so your team focuses on complex issues that truly need a human touch", iconName: "Zap" },
    { title: "24/7 Support, Zero Burnout", description: "Deliver round-the-clock support without overnight shifts or weekend rotations. ClarityDesk never sleeps.", iconName: "Moon" },
    { title: "35% Higher CSAT", description: "Faster, more accurate responses lead to happier customers. Our users consistently see a significant lift in satisfaction ratings.", iconName: "Heart" },
    { title: "Works With Your Stack", description: "Native integrations with Zendesk, Intercom, Freshdesk, Slack, and 50+ tools your team already relies on", iconName: "Layers" },
    { title: "SOC 2 Type II Certified", description: "End-to-end encryption, role-based access, full audit trails, and data residency options for regulated industries", iconName: "ShieldCheck" },
    { title: "Actionable Analytics", description: "Track resolution rates, agent performance, ticket trends, and AI accuracy — all from a single real-time dashboard", iconName: "BarChart3" },
  ],

  comparison: {
    competitors: ["Traditional Help Desk", "Rule-Based Chatbots"],
    rows: [
      { feature: "AI Ticket Resolution", competitor1: false, competitor2: false, ours: true },
      { feature: "Context-Aware Response Drafts", competitor1: false, competitor2: false, ours: true },
      { feature: "Sentiment-Based Escalation", competitor1: false, competitor2: false, ours: true },
      { feature: "Continuous Knowledge Learning", competitor1: false, competitor2: true, ours: true },
      { feature: "Multi-Channel Unified Inbox", competitor1: true, competitor2: false, ours: true },
      { feature: "Real-Time Analytics", competitor1: true, competitor2: false, ours: true },
      { feature: "Custom Workflow Automation", competitor1: false, competitor2: false, ours: true },
    ],
  },

  trustedBy: [
    { name: "Streamline", tagline: "SaaS Platform" },
    { name: "CartFlow", tagline: "E-Commerce" },
    { name: "Pinnacle Group", tagline: "Enterprise Services" },
  ],

  sections: {
    testimonials: true,
    trustedBy: false,
    comparison: true,
    howItWorks: true,
    benefits: true,
    productShowcase: true,
    faq: true,
    pricingPreview: false,
  },

  faqs: [
    {
      question: "How does ClarityDesk learn from my knowledge base?",
      answer: "ClarityDesk ingests your help center articles, FAQs, internal SOPs, and historical ticket data. Our AI builds a deep contextual understanding of your product and common issues, then uses that knowledge to resolve tickets and draft accurate responses. It continuously improves as new content is added.",
    },
    {
      question: "Will ClarityDesk replace my support team?",
      answer: "Not at all. ClarityDesk augments your team — it handles repetitive, straightforward tickets so your agents can focus on complex issues that require empathy and expertise. Agents always have full control to review, edit, and override AI responses.",
    },
    {
      question: "What channels does ClarityDesk support?",
      answer: "Email, live chat, Slack, Microsoft Teams, and native integrations with Zendesk, Intercom, and Freshdesk. We also offer a REST API for custom channel integrations.",
    },
    {
      question: "Is customer data secure?",
      answer: "ClarityDesk is SOC 2 Type II certified with AES-256 encryption at rest and TLS 1.3 in transit. We offer role-based access controls, full audit logs, and data residency options for EU customers. Your data is never used to train models for other customers.",
    },
    {
      question: "How quickly can we get started?",
      answer: "Most teams are live within a day. Connect your help desk, point ClarityDesk at your knowledge base, and the AI starts learning immediately. You'll see meaningful ticket deflection within the first week.",
    },
  ],

  pricing: {
    plans: [
      {
        name: "Starter",
        monthlyPrice: 59,
        annualPrice: 590,
        description: "For small teams exploring AI-powered support",
        features: [
          "500 AI-resolved tickets/month",
          "2 agent seats",
          "1 knowledge base source",
          "Email channel only",
          "Basic analytics",
          "Community support",
          "30-day conversation history",
          "Standard response templates",
        ],
        limitations: [
          "No smart escalation",
          "No sentiment detection",
          "No API access",
        ],
      },
      {
        name: "Pro",
        monthlyPrice: 179,
        annualPrice: 1790,
        description: "For teams that need intelligent automation at scale",
        popular: true,
        features: [
          "Everything in Starter, plus:",
          "5,000 AI-resolved tickets/month",
          "10 agent seats",
          "Unlimited knowledge base sources",
          "Email, chat, and Slack channels",
          "Smart escalation engine",
          "Sentiment detection",
          "Priority support (4h response)",
          "Advanced analytics & reporting",
          "Custom workflow automation",
          "SSO integration",
          "Unlimited conversation history",
        ],
        limitations: [],
      },
      {
        name: "Enterprise",
        monthlyPrice: null,
        annualPrice: null,
        description: "For large support organizations with complex needs",
        features: [
          "Everything in Pro, plus:",
          "Unlimited AI-resolved tickets",
          "Unlimited agent seats",
          "Full API access and webhooks",
          "Custom AI model fine-tuning",
          "Dedicated infrastructure",
          "24/7 premium support",
          "HIPAA and SOC 2 compliance",
          "Data residency options",
          "Dedicated success manager",
          "Custom SLA",
          "On-premise deployment option",
        ],
        limitations: [],
      },
    ],
    comparisonCategories: [
      {
        category: "AI & Automation",
        features: [
          { name: "AI-Resolved Tickets", basic: "500/mo", pro: "5,000/mo", enterprise: "Unlimited" },
          { name: "Smart Escalation", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "Sentiment Detection", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "Custom AI Training", basic: "✗", pro: "✗", enterprise: "✓" },
        ],
      },
      {
        category: "Channels & Integrations",
        features: [
          { name: "Email", basic: "✓", pro: "✓", enterprise: "✓" },
          { name: "Live Chat", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "Slack / Teams", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "API Access", basic: "✗", pro: "✗", enterprise: "✓" },
        ],
      },
      {
        category: "Team & Management",
        features: [
          { name: "Agent Seats", basic: "2", pro: "10", enterprise: "Unlimited" },
          { name: "Knowledge Sources", basic: "1", pro: "Unlimited", enterprise: "Unlimited" },
          { name: "Workflow Automation", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "SSO", basic: "✗", pro: "✓", enterprise: "✓" },
        ],
      },
      {
        category: "Security & Compliance",
        features: [
          { name: "Encryption", basic: "✓", pro: "✓", enterprise: "✓" },
          { name: "Audit Logs", basic: "✗", pro: "✓", enterprise: "✓" },
          { name: "Data Residency", basic: "✗", pro: "✗", enterprise: "✓" },
          { name: "HIPAA Compliance", basic: "✗", pro: "✗", enterprise: "✓" },
        ],
      },
    ],
    faqs: [
      { q: "Can I switch plans later?", a: "Yes, upgrade or downgrade anytime. Changes take effect immediately with prorated billing." },
      { q: "What payment methods do you accept?", a: "All major credit cards, PayPal, and wire transfer for Enterprise plans." },
      { q: "Is there a setup fee?", a: "No setup fees on any plan. Enterprise onboarding is included at no extra cost." },
      { q: "Do you offer refunds?", a: "Yes, all plans include a 30-day money-back guarantee — no questions asked." },
    ],
  },

  contact: {
    heading: "We'd Love to Hear From You",
    subheading: "Questions about ClarityDesk? Want to see how AI can transform your support team? Our team is here to help.",
    supportHours: "Monday – Friday: 9:00 AM – 6:00 PM PST",
  },

  legal: {
    companyLegalName: "ClarityDesk Inc.",
    jurisdiction: "Delaware, USA",
    dpoEmail: "dpo@claritydesk.support",
  },

  register: {
    heading: "Join the Waitlist",
    subheading: "Be among the first to experience AI-powered customer support that actually works.",
    waitlistMessage: "You're in! We've added you to the ClarityDesk early access list. We'll send you an email the moment your account is ready. In the meantime, keep an eye on your inbox — we'll share tips on how AI-powered support can transform your team's workflow.",
  },

  login: {
    heading: "Welcome Back",
    errorMessage: "Those credentials didn't match. Double-check your email and password and give it another try. If you recently joined the waitlist, your account may not be active yet.",
  },

  dashboard: {
    statsCards: [
      { label: "Tickets Resolved", value: "1,247", detail: "This month" },
      { label: "Avg Response Time", value: "28s", detail: "AI-powered" },
      { label: "CSAT Score", value: "4.9", detail: "Out of 5.0" },
    ],
    chartLabel: "Ticket Volume & Resolution Rate",
    recentActivity: [
      { name: "Auto-Resolved", category: "Billing Inquiry", color: "bg-indigo-500", status: "Resolved" },
      { name: "Escalated to Agent", category: "Technical Issue", color: "bg-fuchsia-500", status: "In Progress" },
      { name: "Draft Sent for Review", category: "Feature Request", color: "bg-violet-500", status: "Pending" },
      { name: "Knowledge Base Updated", category: "System", color: "bg-purple-500", status: "Completed" },
    ],
    aiInsight: "Your AI resolution rate improved 12% this week after syncing the updated FAQ articles. Adding troubleshooting guides for your top 5 escalated categories could push auto-resolution above 85%.",
  },

  productShowcase: {
    heading: "Support, Reimagined",
    tabs: [
      { name: "Inbox", label: "AI-Powered Inbox" },
      { name: "Escalations", label: "Smart Escalation Queue" },
      { name: "Analytics", label: "Support Analytics" },
    ],
  },

  product: {
    headline: "The Complete AI Platform for Customer Support",
    subheadline: "ClarityDesk goes beyond basic help desks. Explore every capability, see how support teams use it, and discover the integrations that make it fit seamlessly into your workflow.",
    featureDetails: [
      {
        title: "AI Ticket Resolution",
        description: "ClarityDesk reads, understands, and resolves common support tickets automatically. It draws from your knowledge base, historical conversations, and SOPs to craft accurate, context-aware responses — without any human involvement for routine issues.",
        useCases: [
          "E-commerce teams auto-resolve order status, refund, and shipping inquiries",
          "SaaS companies deflect password reset and billing questions instantly",
          "IT help desks handle common troubleshooting requests around the clock",
        ],
        highlight: "80% resolved without human intervention",
        iconName: "Bot",
      },
      {
        title: "Smart Response Drafting",
        description: "For tickets that need a human touch, ClarityDesk drafts context-aware replies your agents can review and send in one click. Every draft pulls from relevant knowledge base articles, past resolutions, and customer history to ensure accuracy and tone consistency.",
        useCases: [
          "Support agents review and send AI-drafted replies in seconds instead of minutes",
          "New team members ramp up faster with AI-suggested responses as training wheels",
          "Managers ensure consistent tone and accuracy across the entire support team",
        ],
        highlight: "60% faster agent response time",
        iconName: "Pen",
      },
      {
        title: "Intelligent Escalation",
        description: "ClarityDesk's escalation engine detects sentiment, urgency, and complexity in real time. It routes tickets to the right team member based on expertise, availability, and workload — ensuring no ticket falls through the cracks and VIP customers get priority treatment.",
        useCases: [
          "Frustrated customers are instantly routed to senior agents with de-escalation skills",
          "Technical issues are matched to engineers with relevant product expertise",
          "VIP accounts are flagged and fast-tracked to dedicated support managers",
        ],
        highlight: "Sentiment-aware routing engine",
        iconName: "Workflow",
      },
      {
        title: "Knowledge Base Sync",
        description: "Connect your docs, FAQs, help center articles, and internal SOPs. ClarityDesk continuously ingests and learns from new content, keeping its answers accurate and current. When your product changes, your AI support adapts automatically.",
        useCases: [
          "Product teams push doc updates that immediately improve AI response accuracy",
          "Support leads identify knowledge gaps from tickets the AI couldn't resolve",
          "Compliance teams ensure regulated responses stay current with policy changes",
        ],
        highlight: "Always learning, always improving",
        iconName: "BookOpen",
      },
      {
        title: "Omnichannel Inbox",
        description: "Email, live chat, Slack, Microsoft Teams, social media — every conversation lands in one unified inbox. Your agents never have to switch between tools, and customers get consistent support regardless of how they reach out.",
        useCases: [
          "Support teams manage all channels from a single interface without context-switching",
          "Customers start a conversation on chat and continue via email seamlessly",
          "Managers get a unified view of support volume and performance across all channels",
        ],
        highlight: "One inbox for every channel",
        iconName: "Inbox",
      },
    ],
    integrations: [
      { name: "Zendesk", category: "Help Desk" },
      { name: "Intercom", category: "Help Desk" },
      { name: "Freshdesk", category: "Help Desk" },
      { name: "Slack", category: "Communication" },
      { name: "Microsoft Teams", category: "Communication" },
      { name: "Salesforce", category: "CRM" },
      { name: "HubSpot", category: "CRM" },
      { name: "Jira", category: "Project Management" },
      { name: "Confluence", category: "Knowledge Base" },
      { name: "Notion", category: "Knowledge Base" },
      { name: "Shopify", category: "E-Commerce" },
      { name: "Zapier", category: "Automation" },
    ],
    useCases: [
      {
        title: "For SaaS Companies",
        description: "Deflect routine tickets, accelerate onboarding support, and scale your team without scaling headcount. ClarityDesk learns your product inside and out.",
        iconName: "Cloud",
      },
      {
        title: "For E-Commerce Teams",
        description: "Handle order inquiries, returns, and shipping questions instantly. Keep CSAT high during peak seasons without hiring temporary staff.",
        iconName: "ShoppingCart",
      },
      {
        title: "For Enterprise IT",
        description: "Automate internal help desk operations, resolve common IT requests, and free your team to focus on infrastructure and security projects.",
        iconName: "Server",
      },
    ],
    ctaHeading: "Ready to Transform Your Support?",
    ctaDescription: "Join thousands of support teams using ClarityDesk to resolve tickets faster, keep customers happier, and give agents their time back.",
  },
};
