"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../site.config";

const navItems = [
  { name: "Product", path: "/product" },
  ...siteConfig.nav.items,
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return pathname === "/";
    return pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border-color shadow-lg shadow-black/10"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt={siteConfig.business.name} width={28} height={28} />
          <span className="font-bold text-foreground text-lg tracking-tight">{siteConfig.business.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm transition-colors link-hover ${
                isActive(item.path)
                  ? "text-foreground font-semibold"
                  : "text-accent-400 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-accent-400 hover:text-foreground transition-colors"
          >
            {siteConfig.nav.signInText}
          </Link>
          <Link
            href="/register"
            className="btn-primary text-sm !py-2 !px-5"
          >
            {siteConfig.nav.ctaText}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground hover:bg-surface-1 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border-color px-6 py-5 space-y-1 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm py-2.5 px-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "text-foreground font-semibold bg-surface-1"
                  : "text-accent-400 hover:text-foreground hover:bg-surface-1"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border-color flex flex-col gap-2.5">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-sm text-accent-400 px-3 py-2">
              {siteConfig.nav.signInText}
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm text-center !py-2.5"
            >
              {siteConfig.nav.ctaText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
