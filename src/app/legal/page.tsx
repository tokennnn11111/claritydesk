"use client";

import { siteConfig } from "../../../site.config";

const sections = [
  {
    id: "terms",
    title: "Terms of Service",
    content: [
      `These Terms of Service ("Terms") govern your access to and use of the ${siteConfig.business.name} platform, operated by ${siteConfig.legal.companyLegalName}, a company incorporated in ${siteConfig.legal.jurisdiction}. By accessing or using our services, you agree to be bound by these Terms.`,
      `${siteConfig.business.name} provides AI-powered customer support automation tools including ticket resolution, response drafting, escalation routing, and analytics. Your use of these services is subject to the terms outlined herein and any applicable subscription agreement.`,
      `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify ${siteConfig.business.name} immediately of any unauthorized use of your account.`,
      `${siteConfig.legal.companyLegalName} reserves the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice. We will notify you of material changes via email or through the platform.`,
      `These Terms are governed by the laws of ${siteConfig.legal.jurisdiction}. Any disputes arising from these Terms shall be resolved in the courts of ${siteConfig.legal.jurisdiction}.`,
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: [
      `${siteConfig.legal.companyLegalName} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you use the ${siteConfig.business.name} platform.`,
      `We collect information you provide directly (name, email, company details), usage data (feature interactions, session data), and technical data (IP address, browser type, device information). We also process customer support ticket data that you route through our platform.`,
      `Your data is used to provide and improve our services, train AI models specific to your account, send service communications, and ensure platform security. We never use your customer data to train models for other customers.`,
      `We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II certified infrastructure. Data is stored in secure facilities with role-based access controls.`,
      `For data protection inquiries, contact our Data Protection Officer at ${siteConfig.legal.dpoEmail}. EU customers may request data residency within the European Economic Area.`,
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    content: [
      `${siteConfig.business.name} uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver relevant content.`,
      `Essential cookies are required for the platform to function and cannot be disabled. These include session cookies, authentication tokens, and security cookies.`,
      `Analytics cookies help us understand how users interact with ${siteConfig.business.name}. We use this data to improve features, fix issues, and optimize performance. You may opt out of analytics cookies through your browser settings.`,
      `We do not use advertising or third-party tracking cookies. ${siteConfig.business.name} does not sell your data to advertisers or data brokers.`,
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    content: [
      `${siteConfig.legal.companyLegalName} maintains SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality of customer data.`,
      `For Enterprise customers, ${siteConfig.business.name} offers HIPAA-compliant infrastructure with Business Associate Agreements (BAAs) available upon request.`,
      `We comply with GDPR, CCPA, and other applicable data protection regulations. Users have the right to access, correct, delete, and export their personal data.`,
      `${siteConfig.business.name} conducts regular third-party security audits and penetration testing. Vulnerability reports can be submitted to our security team at ${siteConfig.business.email}.`,
    ],
  },
  {
    id: "dpa",
    title: "Data Processing Agreement",
    content: [
      `This Data Processing Agreement ("DPA") forms part of the agreement between you ("Data Controller") and ${siteConfig.legal.companyLegalName} ("Data Processor") for the processing of personal data through the ${siteConfig.business.name} platform.`,
      `${siteConfig.legal.companyLegalName} processes personal data solely on your documented instructions and for the purpose of providing the ${siteConfig.business.name} services. We do not process data for any other purpose without your explicit consent.`,
      `We maintain appropriate technical and organizational measures to protect personal data, including encryption, access controls, regular security assessments, and incident response procedures.`,
      `In the event of a data breach, ${siteConfig.legal.companyLegalName} will notify you within 72 hours of becoming aware of the breach, providing details of the nature, scope, and recommended mitigation measures.`,
      `Upon termination of services, ${siteConfig.legal.companyLegalName} will delete or return all personal data within 30 days, unless retention is required by applicable law. For questions about data processing, contact ${siteConfig.legal.dpoEmail}.`,
    ],
  },
];

export default function LegalPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 data-reveal="headline" className="text-3xl md:text-4xl font-bold text-foreground mb-4">Legal</h1>
        <p data-reveal="subheadline" className="text-accent-400 mb-10">
          Review the legal documents governing your use of {siteConfig.business.name}.
        </p>

        {/* Table of Contents */}
        <nav data-reveal="tabs" className="mb-14 pb-6 border-b border-border-color">
          <ul className="flex flex-wrap gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-accent-500 hover:text-accent-400 font-medium transition-colors link-hover">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* All sections */}
        <div className="space-y-20">
          {sections.map((s) => (
            <div key={s.id} id={s.id}>
              <h2 className="text-xl font-bold text-foreground mb-5 pb-2 border-b border-border-color">{s.title}</h2>
              <div className="space-y-4">
                {s.content.map((p, i) => (
                  <p key={i} className="text-sm text-accent-300 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-6 border-t border-border-color text-xs text-accent-600">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>
    </section>
  );
}
