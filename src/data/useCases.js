export const useCases = [
  {
    id: 1,
    industry: "E-commerce",
    icon: "ShoppingCart",
    title: "Boost Sales & Reduce Support Costs",
    description: "Handle order inquiries, returns, product recommendations, and abandoned cart recovery automatically",
    customerStory: {
      company: "RedMart Online",
      result: "Reduced support costs by 70% and increased sales by 35%",
      metric: "70% cost reduction"
    },
    features: [
      "Order status tracking",
      "Automated returns processing", 
      "Product recommendations",
      "Cart abandonment recovery",
      "Payment assistance",
      "Shipping updates"
    ],
    conversation: [
      { type: "customer", message: "Hi, where is my order #12345?" },
      { type: "bot", message: "Let me check that for you! 📦" },
      { type: "bot", message: "Your order is out for delivery and will arrive today by 6 PM. You can track it here: [link]" },
      { type: "customer", message: "Great! Can I change the delivery address?" },
      { type: "bot", message: "I can help with that! Let me connect you with our delivery team to update the address." }
    ]
  },
  {
    id: 2,
    industry: "SaaS Companies", 
    icon: "Laptop",
    title: "Convert More Leads to Customers",
    description: "Qualify leads, schedule demos, onboard new users, and provide instant product support",
    customerStory: {
      company: "TechStart",
      result: "Increased trial conversions by 150% and reduced sales cycle by 40%",
      metric: "150% conversion increase"
    },
    features: [
      "Lead qualification",
      "Demo scheduling",
      "Product onboarding",
      "Feature explanations",
      "Pricing inquiries",
      "Technical support"
    ],
    conversation: [
      { type: "customer", message: "I'm interested in your CRM software" },
      { type: "bot", message: "Excellent! I'd love to help you find the right solution. What's your company size?" },
      { type: "customer", message: "We're a team of 25 people" },
      { type: "bot", message: "Perfect! For teams your size, our Professional plan works great. Would you like to see a demo? I can schedule one with our product expert." },
      { type: "customer", message: "Yes, that would be helpful" }
    ]
  },
  {
    id: 3,
    industry: "Healthcare",
    icon: "Heart", 
    title: "Streamline Patient Communication",
    description: "Automate appointment booking, prescription reminders, test results, and general health inquiries",
    customerStory: {
      company: "HealthPlus Clinic",
      result: "Automated 80% of appointment bookings and improved patient satisfaction to 4.9/5",
      metric: "80% booking automation"
    },
    features: [
      "Appointment scheduling",
      "Prescription reminders",
      "Test result notifications",
      "Health tips & advice", 
      "Insurance inquiries",
      "Emergency protocols"
    ],
    conversation: [
      { type: "customer", message: "I need to book an appointment with Dr. Sharma" },
      { type: "bot", message: "I'd be happy to help! Dr. Sharma has availability this week. What type of consultation do you need?" },
      { type: "customer", message: "General checkup" },
      { type: "bot", message: "Perfect! I have slots available:\n• Tomorrow 2:00 PM\n• Thursday 10:30 AM\n• Friday 4:00 PM\n\nWhich works for you?" },
      { type: "customer", message: "Thursday 10:30 AM sounds good" }
    ]
  },
  {
    id: 4,
    industry: "Education",
    icon: "GraduationCap",
    title: "Support Students 24/7",
    description: "Handle admissions, course enrollment, fee payments, and provide instant academic support",
    customerStory: {
      company: "EduTech Academy", 
      result: "Reduced response time from 24 hours to 30 seconds and saved 20 hours/week",
      metric: "24hrs → 30sec response"
    },
    features: [
      "Admission assistance", 
      "Course information",
      "Fee payment help",
      "Assignment guidance",
      "Exam schedules",
      "Academic resources"
    ],
    conversation: [
      { type: "customer", message: "What are the requirements for the Data Science course?" },
      { type: "bot", message: "Great choice! Our Data Science program requires:\n\n📚 Prerequisites:\n• Basic programming knowledge\n• High school mathematics\n• No prior ML experience needed\n\n💰 Fee: ₹45,000\n⏱️ Duration: 6 months\n\nWould you like to know about our payment plans?" },
      { type: "customer", message: "Yes, what payment options do you have?" }
    ]
  }
];

export const industryStats = {
  ecommerce: {
    averageResponse: "3 minutes",
    automationRate: "85%",
    costSavings: "70%",
    customerSatisfaction: "4.8/5"
  },
  saas: {
    averageResponse: "30 seconds", 
    automationRate: "75%",
    conversionIncrease: "150%",
    leadQualification: "90%"
  },
  healthcare: {
    averageResponse: "1 minute",
    automationRate: "80%", 
    appointmentBooking: "95%",
    patientSatisfaction: "4.9/5"
  },
  education: {
    averageResponse: "2 minutes",
    automationRate: "85%",
    queryResolution: "92%",
    timeSaved: "20 hours/week"
  }
};