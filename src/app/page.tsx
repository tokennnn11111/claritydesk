"use client";

import { useState, ComponentType } from "react";
import Link from "next/link";
import {
  Bot, Pen, Workflow, BookOpen, Inbox, Zap, Shield, Globe,
  Headphones, Brain, Mail, Users, Moon, Heart, Layers,
  ShieldCheck, BarChart3, Check, X as XIcon, ArrowRight, ChevronDown,
} from "lucide-react";
import { siteConfig } from "../../site.config";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Bot, Pen, Workflow, BookOpen, Inbox, Zap, Shield, Globe,
  Headphones, Brain, Mail, Users, Moon, Heart, Layers,
  ShieldCheck, BarChart3,
};

/* ─── HERO-E: Asymmetric Hero ─── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-[60%] space-y-6">
          <span data-reveal="badge" className="inline-block text-xs font-medium tracking-wide uppercase text-accent-500 bg-surface-1 px-4 py-1.5 rounded-full border border-border-color">
            {siteConfig.hero.badge}
          </span>
          <h1 data-reveal="headline" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            {siteConfig.hero.headline}{" "}
            <span className="text-gradient">{siteConfig.hero.headlineHighlight}</span>
          </h1>
          <p data-reveal="subheadline" className="text-lg text-accent-400 max-w-xl leading-relaxed">
            {siteConfig.hero.subheadline}
          </p>
          <div data-reveal="cta" className="flex flex-wrap gap-3 pt-2">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-6">
              {siteConfig.hero.primaryCta} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/product" className="btn-secondary inline-block text-sm !py-3 !px-6">
              {siteConfig.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-[40%] items-center justify-center relative min-h-[320px]">
          <div className="w-72 h-72 rounded-full bg-primary-500/15 animate-float-subtle animate-pulse-glow" />
          <div className="absolute w-48 h-48 rounded-full bg-accent-500/10 top-8 right-4 animate-float-subtle" style={{ animationDelay: "2s" }} />
          <div className="absolute w-28 h-28 rounded-full bg-primary-300/10 bottom-4 left-8 animate-float-subtle" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      <div data-reveal="social" className="max-w-6xl mx-auto px-6 mt-16">
        <div className="flex flex-wrap justify-between gap-6 border-t border-border-color pt-8">
          {siteConfig.hero.stats.map((stat, i) => (
            <div key={i} data-reveal="stat" data-delay={i + 1} className="text-center flex-1 min-w-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-accent-600 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEAT-6: Large Feature Cards (2-Column) ─── */
function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Everything Your Support Team Needs
          </h2>
          <p data-reveal="section-sub" className="text-accent-400 mt-3 max-w-2xl mx-auto">
            Powerful AI capabilities that work together to transform how you handle customer support.
          </p>
        </div>

        <div data-reveal="tabs" className="flex flex-wrap justify-center gap-2.5 mb-14">
          {siteConfig.featureBadges.map((badge, i) => {
            const Icon = iconMap[badge.iconName];
            return (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs text-accent-300 bg-surface-1 border border-border-color px-3.5 py-1.5 rounded-full font-medium">
                {Icon && <Icon className="w-3.5 h-3.5 text-accent-500" />}
                {badge.label}
              </span>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div key={i} data-reveal="card" data-delay={i + 1} className="card card-hover p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-box w-11 h-11 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-5 h-5 text-accent-500" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-accent-400 mt-2 leading-relaxed">{feature.description}</p>
                    <span className="inline-block text-xs text-accent-400 font-semibold mt-3 bg-accent-500/10 px-2.5 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── DASH-3: Minimal Dashboard Mockup ─── */
function DashboardSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            {siteConfig.productShowcase.heading}
          </h2>
        </div>

        <div data-reveal="mockup" className="mockup-container p-0 overflow-hidden max-w-4xl mx-auto">
          <div className="px-6 py-3.5 border-b border-border-color flex items-center justify-between bg-surface-2">
            <span className="text-xs font-semibold text-foreground tracking-wide">{siteConfig.business.name} Dashboard</span>
            <div className="flex gap-5">
              {siteConfig.productShowcase.tabs.map((tab, i) => (
                <span key={i} className={`text-xs font-medium ${i === 0 ? "text-accent-300" : "text-accent-600 hover:text-accent-400 cursor-pointer transition-colors"}`}>
                  {tab.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-border-color">
            {siteConfig.dashboard.statsCards.map((stat, i) => (
              <div key={i} className={`px-6 py-5 ${i < 2 ? "border-r border-border-color" : ""}`}>
                <div className="text-xs text-accent-600 uppercase tracking-wider font-medium">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground mt-1">{stat.value}</div>
                <div className="text-xs text-accent-600 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="px-6 py-6 border-b border-border-color">
            <div className="text-xs text-accent-600 mb-4 font-medium">{siteConfig.dashboard.chartLabel}</div>
            <div className="h-36 flex items-end gap-1.5">
              {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i % 2 === 0 ? "chart-bar" : "chart-bar-accent"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="text-xs text-accent-600 mb-3 uppercase tracking-wider font-medium">Recent Activity</div>
            {siteConfig.dashboard.recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-border-color last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-sm text-foreground font-medium">{item.name}</span>
                </div>
                <span className="text-xs text-accent-600">{item.category}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  item.status === "Resolved" || item.status === "Completed"
                    ? "bg-primary-500/10 text-primary-400"
                    : item.status === "In Progress"
                    ? "bg-accent-500/10 text-accent-400"
                    : "bg-surface-2 text-accent-600"
                }`}>{item.status}</span>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-surface-2 border-t border-border-color">
            <div className="text-xs text-accent-500 mb-1 font-semibold">✦ AI Insight</div>
            <p className="text-sm text-accent-300 leading-relaxed">{siteConfig.dashboard.aiInsight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HIW-3: Numbered List (No Cards) ─── */
function HowItWorksSection() {
  return (
    <section className="py-24 bg-section-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p data-reveal="section-sub" className="text-accent-400 mt-3">Get up and running in four simple steps.</p>
        </div>
        <div className="space-y-12">
          {siteConfig.howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
              <div key={i} data-reveal="step" data-delay={i + 1} className="flex items-start gap-6">
                <span className="text-4xl font-bold text-accent-500/30 leading-none shrink-0 w-12 text-right">{step.step}</span>
                <div className="pt-1">
                  <div className="flex items-center gap-2.5">
                    {Icon && <Icon className="w-4.5 h-4.5 text-accent-500" />}
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-accent-400 mt-1.5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── BEN-4: Icon + Text Rows (No Cards) ─── */
function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Why Teams Choose {siteConfig.business.name}
          </h2>
        </div>
        <div className="space-y-10">
          {siteConfig.benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <div key={i} data-reveal="step" data-delay={i + 1} className="flex items-start gap-5">
                <div className="icon-box w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                  {Icon && <Icon className="w-5 h-5 text-accent-500" />}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-accent-400 mt-1.5 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
function ComparisonSection() {
  return (
    <section className="py-24 bg-section-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            {siteConfig.business.name} vs. The Rest
          </h2>
        </div>
        <div data-reveal="card" className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-color bg-surface-2">
                <th className="text-left px-6 py-3.5 text-xs text-accent-600 font-semibold uppercase tracking-wider">Feature</th>
                {siteConfig.comparison.competitors.map((c, i) => (
                  <th key={i} className="text-center px-4 py-3.5 text-xs text-accent-600 font-semibold uppercase tracking-wider">{c}</th>
                ))}
                <th className="text-center px-4 py-3.5 text-xs text-primary-500 font-semibold uppercase tracking-wider">{siteConfig.business.name}</th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.comparison.rows.map((row, i) => (
                <tr key={i} className="border-b border-border-color last:border-0 hover:bg-surface-2/50 transition-colors">
                  <td className="px-6 py-3 text-foreground font-medium">{row.feature}</td>
                  <td className="text-center px-4 py-3">{row.competitor1 ? <Check className="w-4 h-4 text-accent-600 mx-auto" /> : <XIcon className="w-4 h-4 text-accent-600/30 mx-auto" />}</td>
                  <td className="text-center px-4 py-3">{row.competitor2 ? <Check className="w-4 h-4 text-accent-600 mx-auto" /> : <XIcon className="w-4 h-4 text-accent-600/30 mx-auto" />}</td>
                  <td className="text-center px-4 py-3"><Check className="w-4 h-4 text-primary-500 mx-auto" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ: Animated Accordion ─── */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p data-reveal="section-sub" className="text-accent-400 mt-3">
            Everything you need to know about {siteConfig.business.name}.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.faqs.map((faq, i) => (
            <div
              key={i}
              data-reveal="faq-item"
              data-delay={i + 1}
              className={`faq-item ${openIndex === i ? "faq-open" : ""}`}
            >
              <button
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <ChevronDown className="w-3.5 h-3.5 text-accent-500" />
                </span>
              </button>
              <div className={`faq-content ${openIndex === i ? "faq-expanded" : ""}`}>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA ─── */
function CtaSection() {
  return (
    <section className="py-24 bg-section-bg">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 data-reveal="section-heading" className="text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Support?</h2>
        <p data-reveal="section-sub" className="text-accent-400 mt-4 leading-relaxed">
          Join thousands of support teams using {siteConfig.business.name} to resolve tickets faster, keep customers happier, and give agents their time back.
        </p>
        <div data-reveal="cta" className="flex flex-wrap justify-center gap-3 mt-8">
          <Link href="/register" className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-6">
            {siteConfig.hero.primaryCta} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/pricing" className="btn-secondary inline-block text-sm !py-3 !px-6">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Assembly ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <FeaturesSection />
      {siteConfig.sections.productShowcase && <DashboardSection />}
      <div className="section-divider" />
      {siteConfig.sections.howItWorks && <HowItWorksSection />}
      {siteConfig.sections.benefits && <BenefitsSection />}
      <div className="section-divider" />
      {siteConfig.sections.comparison && <ComparisonSection />}
      {siteConfig.sections.faq && <FaqSection />}
      <div className="section-divider" />
      <CtaSection />
    </>
  );
}
