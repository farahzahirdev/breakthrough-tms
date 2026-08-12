"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

const navItems = [
  { href: "/#tms", label: copy.header.nav.tms },
  { href: "/#conditions", label: copy.header.nav.conditions },
  { href: "/#patient-stories", label: copy.header.nav.stories },
  { href: "/#meet-doctor", label: copy.header.nav.doctor },
  { href: "/#insurance", label: copy.header.nav.insurance },
  { href: "/#location", label: copy.header.nav.location },
  { href: "/#faq", label: copy.header.nav.faq },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  const drawer = drawerOpen ? (
    <div className="drawer-root is-open" role="presentation">
      <button
        type="button"
        className="drawer-backdrop"
        aria-label="Close menu"
        onClick={closeDrawer}
      />
      <nav
        id="mobile-drawer"
        className="drawer-panel"
        aria-label="Mobile navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-panel-header">
          <Image
            src={site.logo}
            alt=""
            width={140}
            height={42}
            className="h-[42px] w-auto"
            aria-hidden
          />
          <button type="button" className="drawer-close" aria-label="Close menu" onClick={closeDrawer}>
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <ul className="drawer-links">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              className="drawer-link-item is-visible"
              style={{ transitionDelay: `${60 + i * 40}ms` }}
            >
              <a href={item.href} className="drawer-link" onClick={closeDrawer}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <Button href={site.routes.bookConsult} className="w-full" onClick={closeDrawer}>
            {copy.header.cta}
          </Button>
          <Button href={site.phoneHref} variant="secondary" className="w-full" onClick={closeDrawer}>
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </Button>
        </div>
      </nav>
    </div>
  ) : null;

  return (
    <header className={`bt-nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <div className="bt-nav-bar">
        <button
          type="button"
          className="drawer-toggle xl:hidden"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          {drawerOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>

        <a href="#" className="logo flex shrink-0 items-center" aria-label={`${site.name} home`}>
          <Image
            src={site.logo}
            alt={site.name}
            width={165}
            height={50}
            priority
            className="h-[46px] w-auto transition-opacity duration-300 hover:opacity-85 sm:h-[50px]"
          />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="bt-nav-actions">
          <Button
            href={site.phoneHref}
            variant="secondary"
            className="bt-nav-phone-pill hidden xl:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {site.phone}
          </Button>
          <Button href={site.routes.bookConsult} className="!h-10 !px-4 !text-xs sm:!px-5 sm:!text-sm xl:hidden">
            {copy.header.cta}
          </Button>
        </div>
      </div>

      {mounted && drawer ? createPortal(drawer, document.body) : null}
    </header>
  );
}
