"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, ArrowLeft, CheckCircle } from "lucide-react";
import { siteConfig } from "../../../site.config";

function getPasswordStrength(pw: string): { label: string; width: string; color: string } {
  if (pw.length === 0) return { label: "", width: "0%", color: "bg-accent-600" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { label: "Weak", width: "25%", color: "bg-primary-700" };
  if (score === 2) return { label: "Fair", width: "50%", color: "bg-warning" };
  if (score === 3) return { label: "Good", width: "75%", color: "bg-accent-500" };
  return { label: "Strong", width: "100%", color: "bg-success" };
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");

  const strength = getPasswordStrength(password);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setPassword("");
    }, 1500);
  }

  if (success) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-24">
        <div className="w-full max-w-md px-6 text-center">
          <CheckCircle className="w-12 h-12 text-accent-500 mx-auto mb-5" />
          <h1 className="text-2xl font-bold text-foreground">You&apos;re on the list!</h1>
          <p className="text-sm text-accent-400 mt-4 leading-relaxed max-w-sm mx-auto">{siteConfig.register.waitlistMessage}</p>
          <Link href="/" className="inline-flex items-center gap-2 mt-8 text-sm text-primary-500 hover:text-primary-400 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24">
      <div className="w-full max-w-sm px-6">
        <h1 data-reveal="headline" className="text-2xl font-bold text-foreground text-center">{siteConfig.register.heading}</h1>
        <p data-reveal="subheadline" className="text-sm text-accent-400 text-center mt-2">{siteConfig.register.subheading}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
            <input type="text" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
            <input type="email" required className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 text-sm bg-surface-1 border border-border-color rounded-lg text-foreground placeholder:text-accent-600 focus:outline-2 focus:outline-primary-500 transition-colors" placeholder="••••••••" />
            {password && (
              <div className="mt-2.5">
                <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-300 ${strength.color}`} style={{ width: strength.width }} />
                </div>
                <span className="text-xs text-accent-600 mt-1 block">{strength.label}</span>
              </div>
            )}
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full text-sm !py-3 flex items-center justify-center gap-2 disabled:opacity-60">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>

        <p className="text-sm text-accent-600 text-center mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-500 hover:text-primary-400 font-medium transition-colors">Sign in</Link>
        </p>
      </div>
    </section>
  );
}
