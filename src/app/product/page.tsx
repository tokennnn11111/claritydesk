"use client";

import { ComponentType } from "react";
import Link from "next/link";
import {
  Bot, Pen, Workflow, BookOpen, Inbox, Cloud, ShoppingCart, Server, ArrowRight,
} from "lucide-react";
import { siteConfig } from "../../../site.config";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Bot, Pen, Workflow, BookOpen, Inbox, Cloud, ShoppingCart, Server,
};

export default function ProductPage() {
  return (
    <>
      <section className="py-28 md:py-36 bg-grid-subtle">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span data-reveal="badge" className="inline-block text-xs font-medium tracking-wide uppercase text-accent-500 bg-surface-1 px-4 py-1.5 rounded-full border border-border-color mb-6">
            Product Overview
          </span>
          <h1 data-reveal="headline" className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {siteConfig.product.headline}
          </h1>
          <p data-reveal="subheadline" className="text-lg text-accent-400 mt-6 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.product.subheadline}
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-24">
          {siteConfig.product.featureDetails.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div key={i} data-reveal="step" data-delay={1}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-box w-11 h-11 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-5 h-5 text-accent-500" />}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{feature.title}</h2>
                </div>
                <p className="text-accent-300 leading-relaxed text-base">{feature.description}</p>
                <span className="inline-block text-sm text-accent-400 font-semibold mt-4 bg-accent-500/10 px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
                <ul className="mt-5 space-y-2.5">
                  {feature.useCases.map((uc, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-accent-400">
                      <span className="text-accent-500 mt-0.5 font-bold">→</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 data-reveal="section-heading" className="text-3xl font-bold text-foreground text-center mb-12">Integrations</h2>
          <div data-reveal="card" className="flex flex-wrap justify-center gap-3">
            {siteConfig.product.integrations.map((int, i) => (
              <span key={i} className="text-sm text-foreground bg-surface-1 border border-border-color px-4 py-2 rounded-full hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all cursor-default font-medium">
                {int.name} <span className="text-accent-600 font-normal">· {int.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 data-reveal="section-heading" className="text-3xl font-bold text-foreground text-center mb-14">Built For Your Team</h2>
          <div className="space-y-10">
            {siteConfig.product.useCases.map((uc, i) => {
              const Icon = iconMap[uc.iconName];
              return (
                <div key={i} data-reveal="step" data-delay={i + 1} className="flex items-start gap-5">
                  <div className="icon-box w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    {Icon && <Icon className="w-5 h-5 text-accent-500" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{uc.title}</h3>
                    <p className="text-sm text-accent-400 mt-1.5 leading-relaxed">{uc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-section-bg">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 data-reveal="section-heading" className="text-3xl font-bold text-foreground">{siteConfig.product.ctaHeading}</h2>
          <p data-reveal="section-sub" className="text-accent-400 mt-4 leading-relaxed">{siteConfig.product.ctaDescription}</p>
          <div data-reveal="cta" className="mt-8">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-6">
              {siteConfig.hero.primaryCta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
