export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "3,999",
    period: "month",
    description: "Perfect for small businesses just getting started with automation",
    popular: false,
    features: [
      "1 WhatsApp Business connection",
      "1,000 conversations per month",
      "Basic bot templates",
      "Email support",
      "CV Builder (5 CVs/month)",
      "Invoice Generator (10 invoices/month)",
      "Basic analytics",
      "Standard integrations"
    ],
    limitations: [
      "No multi-platform support",
      "Limited customization",
      "No priority support"
    ],
    cta: "Start Free Trial",
    savings: null
  },
  {
    id: 2,
    name: "Professional", 
    price: "9,999",
    period: "month",
    description: "Most popular choice for growing businesses",
    popular: true,
    features: [
      "3 platform connections (WhatsApp + Instagram + Facebook)",
      "10,000 conversations per month", 
      "Custom conversation flows",
      "Priority support",
      "Unlimited CVs and invoices",
      "CRM integrations (Salesforce, Zoho)",
      "Advanced analytics & reporting",
      "API access",
      "Multi-language support",
      "Custom branding"
    ],
    limitations: [],
    cta: "Start Free Trial",
    savings: "Most Popular"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "24,999", 
    period: "month",
    description: "Complete solution for large organizations",
    popular: false,
    features: [
      "Unlimited platform connections",
      "Unlimited conversations", 
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced AI training",
      "Multi-language support (20+ languages)",
      "Priority development queue",
      "99.9% uptime SLA",
      "Phone & email support",
      "Custom reporting",
      "Compliance assistance"
    ],
    limitations: [],
    cta: "Contact Sales",
    savings: "Best Value"
  }
];

export const annualDiscount = 20; // 20% off for annual billing

export const pricingFeatures = {
  trial: {
    duration: "14 days",
    features: ["All Pro features", "No credit card required", "Cancel anytime", "Full support"]
  },
  guarantee: {
    duration: "30 days",
    description: "Money-back guarantee if you're not satisfied"
  },
  enterprise: {
    customization: true,
    onboarding: true,
    training: true,
    sla: "99.9%"
  }
};

export const comparison = [
  {
    feature: "Platform Connections",
    starter: "1 (WhatsApp only)",
    professional: "3 (WhatsApp + Instagram + Facebook)", 
    enterprise: "Unlimited"
  },
  {
    feature: "Monthly Conversations",
    starter: "1,000",
    professional: "10,000",
    enterprise: "Unlimited"
  },
  {
    feature: "Bot Templates",
    starter: "Basic templates",
    professional: "Custom flows",
    enterprise: "Custom + White-label"
  },
  {
    feature: "Support Level",
    starter: "Email only",
    professional: "Priority email",
    enterprise: "Dedicated manager + Phone"
  },
  {
    feature: "Document Generation",
    starter: "5 CVs + 10 Invoices",
    professional: "Unlimited",
    enterprise: "Unlimited + Custom"
  },
  {
    feature: "Analytics",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Custom reports"
  },
  {
    feature: "API Access",
    starter: "❌",
    professional: "✅",
    enterprise: "✅ + Webhooks"
  },
  {
    feature: "Multi-language",
    starter: "English + Hindi",
    professional: "5 languages",
    enterprise: "20+ languages"
  }
];