"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(siteConfig.login.errorMessage);
    }, 2000);
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24">
      <div className="w-full max-w-sm px-6">
        <h1 data-reveal="headline" className="text-2xl font-bold text-foreground text-center">{siteConfig.login.heading}</h1>
        <p data-reveal="subheadline" className="text-sm text-accent-400 text-center mt-2">Sign in to your {siteConfig.business.name} account</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input type="email" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
            <input type="password" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="••••••••" />
          </div>

          {error && (
            <div className="flex items-start gap-2.5 text-sm text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-lg px-4 py-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full text-sm !py-3 flex items-center justify-center gap-2 disabled:opacity-60">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-accent-600 text-center mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary-500 hover:text-primary-400 font-medium transition-colors">Join the waitlist</Link>
        </p>
      </div>
    </section>
  );
}
