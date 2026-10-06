import { BookOpen, Calculator, Users, FileText, Landmark, BarChart3, Receipt, Briefcase, Building2, HeartPulse, ShoppingCart, Home, Factory, Utensils, Laptop, Truck } from 'lucide-react'

// Single source of truth for site content. Edit contact details and figures here.
export const company = {
  name: 'ShineQuantum Ltd',
  short: 'ShineQuantum',
  email: 'hello@shinequantum.com',
  phone: '+1 (000) 000-0000',
  address: 'Replace with your registered office address',
  calendlyUrl: '', // e.g. 'https://calendly.com/your-handle/30min' to embed a live scheduler
  formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxx' to receive form submissions
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  { slug: 'bookkeeping', icon: BookOpen, title: 'Bookkeeping', short: 'Accurate, up-to-date books with daily transaction coding and monthly reconciliations.',
    long: 'Clean books are the foundation of every financial decision. Our team records, categorises and reconciles your transactions so you always know where you stand.',
    items: ['Transaction recording and categorisation', 'Bank and credit card reconciliation', 'Accounts payable and receivable', 'Month-end close and adjusting entries', 'Clean-up of backlogged or messy books', 'Chart of accounts setup and review'] },
  { slug: 'financial-reporting', icon: BarChart3, title: 'Financial Reporting & Analysis', short: 'Monthly P&L, balance sheet and cash flow reports with insight you can act on.',
    long: 'Move beyond numbers on a page. We deliver management reports with commentary, KPIs and trend analysis so owners and partners can make confident decisions.',
    items: ['Monthly financial statements', 'Management and KPI dashboards', 'Variance and trend analysis', 'Multi-entity consolidation', 'Budgeting and forecasting support', 'Board and investor-ready packs'] },
  { slug: 'accounts-payable-receivable', icon: Receipt, title: 'Accounts Payable & Receivable', short: 'Invoice processing, vendor payments and collections follow-up to protect cash flow.',
    long: 'We manage the full cycle from bill entry to payment run and from invoicing to collections, keeping cash flow healthy and vendors happy.',
    items: ['Vendor bill entry and approval workflow', 'Payment run preparation', 'Customer invoicing', 'Collections and ageing follow-up', 'Vendor statement reconciliation', '1099 vendor tracking'] },
  { slug: 'payroll', icon: Users, title: 'Payroll Processing', short: 'Timely, compliant payroll including federal, state and local tax filings.',
    long: 'Pay your people accurately and on time. We prepare payroll, track liabilities and support filings across US states.',
    items: ['Payroll preparation and review', 'Federal, state and local payroll tax support', 'New hire and termination processing', 'Payroll journal entries and reconciliation', 'Year-end W-2 and 1099 preparation support', 'Integration with leading payroll platforms'] },
  { slug: 'tax-support', icon: Calculator, title: 'Tax Preparation Support', short: 'Back-office tax preparation for CPA firms, reviewed and ready for your sign-off.',
    long: 'We act as an extension of your CPA practice, preparing individual and business returns to your standards so you can focus on advisory work and review.',
    items: ['Individual (Form 1040) return preparation', 'Business returns (1120, 1120-S, 1065)', 'Sales tax compliance support', 'Tax workpapers and organisers', 'Extension and estimated tax calculations', 'Review-ready files for CPA sign-off'] },
  { slug: 'cfo-advisory', icon: Briefcase, title: 'Virtual CFO & Advisory', short: 'Strategic finance leadership: cash planning, budgets and growth modelling.',
    long: 'Get senior-level financial guidance without a full-time hire. We help you plan, budget and steer the business with clear, forward-looking numbers.',
    items: ['Cash flow planning and forecasting', 'Annual budgets and rolling forecasts', 'Pricing and margin analysis', 'Fundraising and lender reporting support', 'KPI framework design', 'Monthly advisory sessions'] },
  { slug: 'cpa-white-label', icon: Landmark, title: 'White-Label Support for CPA Firms', short: 'Scale your practice with a trained offshore team that works under your brand.',
    long: 'Grow capacity without growing overheads. Our dedicated professionals integrate into your workflows, tools and standards, and stay invisible to your clients.',
    items: ['Dedicated, trained team members', 'Work under your brand and processes', 'NDA and confidentiality by default', 'Peak-season capacity on demand', 'Seamless handover and review loop', 'Flexible, scalable engagement'] },
  { slug: 'audit-compliance', icon: FileText, title: 'Audit & Compliance Support', short: 'Schedules, reconciliations and documentation that make audits painless.',
    long: 'We prepare the supporting schedules and documentation auditors ask for and keep your records compliance-ready all year.',
    items: ['Audit schedule preparation', 'Fixed asset and depreciation registers', 'Balance sheet reconciliations', 'Internal control documentation', 'Month-end and year-end checklists', 'Support during auditor queries'] },
]

export const industries = [
  { icon: Building2, name: 'Professional Services' },
  { icon: HeartPulse, name: 'Healthcare & Dental' },
  { icon: ShoppingCart, name: 'E-commerce & Retail' },
  { icon: Home, name: 'Real Estate' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Utensils, name: 'Restaurants & Hospitality' },
  { icon: Laptop, name: 'SaaS & Technology' },
  { icon: Truck, name: 'Logistics & Construction' },
]

export const tools = ['QuickBooks Online', 'Xero', 'NetSuite', 'Sage', 'FreshBooks', 'Bill.com', 'Gusto', 'ADP', 'Expensify', 'Zoho Books']

export const process = [
  { n: '01', title: 'Discovery Call', text: 'We learn your business, software stack, volumes, deadlines and reporting needs.' },
  { n: '02', title: 'Scoping & Proposal', text: 'You receive a clear scope, team plan and transparent pricing with no hidden fees.' },
  { n: '03', title: 'Secure Onboarding', text: 'NDA signed, access set up with least-privilege controls, and SOPs documented.' },
  { n: '04', title: 'Pilot Period', text: 'A short trial on live work so you can judge quality and fit before committing.' },
  { n: '05', title: 'Ongoing Delivery', text: 'A dedicated team delivers on agreed timelines with regular reviews and reporting.' },
  { n: '06', title: 'Continuous Improvement', text: 'We refine workflows, add automation and scale the team as your needs grow.' },
]

export const benefits = [
  { title: 'Significant Cost Savings', text: 'Cut accounting overhead substantially compared with hiring and training in-house staff in the US.' },
  { title: 'US GAAP-Aligned Quality', text: 'Work prepared to US GAAP standards with a multi-level review before anything reaches you.' },
  { title: 'Security First', text: 'NDAs, role-based access, encrypted transfers and secure workstations protect your data.' },
  { title: 'Scalable Teams', text: 'Add or reduce capacity quickly for tax season, audits, or rapid growth.' },
  { title: 'Overlap With US Hours', text: 'Flexible shifts so your team is available during your working day.' },
  { title: 'Your Tools, Your Way', text: 'We work inside your software and workflows, so there is nothing new to learn.' },
]

export const values = [
  { title: 'Accuracy', text: 'Every figure is checked, reconciled and reviewed.' },
  { title: 'Integrity', text: 'Honest advice, transparent pricing, confidential handling.' },
  { title: 'Partnership', text: 'We act as an extension of your team, not a vendor.' },
  { title: 'Excellence', text: 'We keep raising the bar on quality and turnaround.' },
]

export const faqs = [
  { q: 'What is outsourced accounting?', a: 'Outsourced accounting means a specialist external team handles your bookkeeping, reporting, payroll or tax preparation instead of an in-house department. You get expert support, predictable cost and scalable capacity.' },
  { q: 'Which accounting software do you work with?', a: 'We work in QuickBooks Online, Xero, NetSuite, Sage, FreshBooks and other major platforms. We adapt to your existing set-up.' },
  { q: 'How do you keep my financial data secure?', a: 'We operate under NDA with role-based access, encrypted communication and secure working environments. We will detail our controls during onboarding.' },
  { q: 'Can I start with a small pilot?', a: 'Yes. A pilot on live work lets you evaluate quality, communication and turnaround before scaling up.' },
  { q: 'Do you work with CPA firms as well as businesses?', a: 'Both. We support US small and mid-sized businesses directly and provide white-label back-office support to CPA and accounting firms.' },
  { q: 'How does pricing work?', a: 'We offer flexible models, including dedicated resources, hourly and fixed monthly packages. Book a call and we will recommend the best fit.' },
]
