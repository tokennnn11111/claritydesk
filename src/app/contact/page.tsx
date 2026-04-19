"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 data-reveal="headline" className="text-3xl md:text-4xl font-bold text-foreground">{siteConfig.contact.heading}</h1>
            <p data-reveal="subheadline" className="text-accent-400 mt-4 leading-relaxed">{siteConfig.contact.subheading}</p>
            <div data-reveal="card" className="mt-12 space-y-7">
              <div className="flex items-start gap-4">
                <div className="icon-box w-9 h-9 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Email</div>
                  <div className="text-sm text-accent-400 mt-0.5">{siteConfig.business.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-box w-9 h-9 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Address</div>
                  <div className="text-sm text-accent-400 mt-0.5">{siteConfig.business.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-box w-9 h-9 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Support Hours</div>
                  <div className="text-sm text-accent-400 mt-0.5">{siteConfig.contact.supportHours}</div>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal="card-right">
            {submitted ? (
              <div className="card py-16 text-center">
                <CheckCircle className="w-10 h-10 text-accent-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground">Thank you!</h2>
                <p className="text-sm text-accent-400 mt-2">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 resize-none focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full text-sm !py-3">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
