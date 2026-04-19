"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function Footer() {
  return (
    <footer className="border-t border-border-color bg-section-bg">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt={siteConfig.business.name} width={22} height={22} />
          <span className="text-sm font-semibold text-foreground">{siteConfig.business.name}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/product" className="text-xs text-accent-400 hover:text-primary-500 transition-colors link-hover">Product</Link>
          <Link href="/pricing" className="text-xs text-accent-400 hover:text-primary-500 transition-colors link-hover">Pricing</Link>
          <Link href="/contact" className="text-xs text-accent-400 hover:text-primary-500 transition-colors link-hover">Contact</Link>
          <Link href="/legal" className="text-xs text-accent-400 hover:text-primary-500 transition-colors link-hover">Legal</Link>
        </nav>
        <span className="text-xs text-accent-600">© {new Date().getFullYear()} {siteConfig.legal.companyLegalName}</span>
      </div>
    </footer>
  );
}
