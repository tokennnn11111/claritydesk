"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X as XIcon, ChevronDown } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="py-24 text-center bg-grid-subtle">
        <div className="max-w-2xl mx-auto px-6">
          <h1 data-reveal="headline" className="text-4xl md:text-5xl font-bold text-foreground">Simple, Transparent Pricing</h1>
          <p data-reveal="subheadline" className="text-accent-400 mt-4">Choose the plan that fits your team. Upgrade or downgrade anytime.</p>
          <div data-reveal="cta" className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!annual ? "text-foreground font-medium" : "text-accent-600"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-primary-500" : "bg-accent-600"}`}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-foreground rounded-full shadow-sm transition-transform ${annual ? "left-6" : "left-0.5"}`} />
            </button>
            <span className={`text-sm ${annual ? "text-foreground font-medium" : "text-accent-600"}`}>
              Annual <span className="text-primary-500 text-xs font-semibold">Save ~17%</span>
            </span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {siteConfig.pricing.plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = (plan as { popular?: boolean }).popular;
            return (
              <div key={i} data-reveal="pricing" data-delay={i + 1} className={`card card-hover p-7 flex flex-col ${isPopular ? "border-primary-500 border-2 relative" : ""}`}>
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-foreground bg-primary-500 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-accent-600 mt-1">{plan.description}</p>
                <div className="mt-5 mb-6">
                  {price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">${price}</span>
                      <span className="text-sm text-accent-600">/{annual ? "year" : "month"}</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  )}
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-accent-300">
                      <Check className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {plan.limitations.map((l, j) => (
                    <li key={`l-${j}`} className="flex items-start gap-2 text-sm text-accent-600">
                      <XIcon className="w-4 h-4 shrink-0 mt-0.5" />
                      {l}
                    </li>
                  ))}
                </ul>
                <Link
                  href={price !== null ? "/register" : "/contact"}
                  className={`mt-6 block text-center text-sm font-medium py-3 rounded-lg transition-all ${
                    isPopular
                      ? "btn-primary !py-3"
                      : "border border-border-color text-foreground hover:bg-surface-2 hover:border-accent-500/30"
                  }`}
                >
                  {price !== null ? "Get Started" : "Contact Us"}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-section-bg">
        <div className="max-w-5xl mx-auto px-6">
          <h2 data-reveal="section-heading" className="text-2xl font-bold text-foreground text-center mb-12">Compare Plans</h2>
          {siteConfig.pricing.comparisonCategories.map((cat, ci) => (
            <div key={ci} className="mb-8">
              <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-3">{cat.category}</h3>
              <div className="card p-0 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-color bg-surface-2">
                      <th className="text-left px-5 py-3 text-xs text-accent-600 font-semibold uppercase tracking-wider">Feature</th>
                      <th className="text-center px-4 py-3 text-xs text-accent-600 font-semibold">Starter</th>
                      <th className="text-center px-4 py-3 text-xs text-accent-600 font-semibold">Pro</th>
                      <th className="text-center px-4 py-3 text-xs text-accent-600 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.features.map((f, fi) => (
                      <tr key={fi} className="border-b border-border-color last:border-0 hover:bg-surface-2/50 transition-colors">
                        <td className="px-5 py-2.5 text-foreground font-medium">{f.name}</td>
                        <td className="text-center px-4 py-2.5 text-accent-400">{f.basic}</td>
                        <td className="text-center px-4 py-2.5 text-accent-400">{f.pro}</td>
                        <td className="text-center px-4 py-2.5 text-accent-400">{f.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 data-reveal="section-heading" className="text-2xl font-bold text-foreground text-center mb-12">Pricing Questions</h2>
          <div className="space-y-3">
            {siteConfig.pricing.faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "faq-open" : ""}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    <ChevronDown className="w-3.5 h-3.5 text-accent-500" />
                  </span>
                </button>
                <div className={`faq-content ${openFaq === i ? "faq-expanded" : ""}`}>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
