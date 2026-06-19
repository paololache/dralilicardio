import { useEffect, useState } from "react";
import { Menu, X, CalendarHeart } from "lucide-react";
import { openWhatsApp } from "./brand";
import { CubaFlag } from "./CubaFlag";
import lilicardioLogo from "@/assets/lilicardio-logo-cropped.png";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(87,2,40,0.25)]" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[72px] md:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src={lilicardioLogo}
            alt="Lilicardio"
            width={120}
            height={56}
            className="h-9 w-auto sm:h-10 md:h-12"
          />
          <CubaFlag className="h-4 w-[24px] overflow-hidden rounded-[2px] shadow-sm" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[16px] text-ink transition-colors hover:text-burgund"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full text-burgund transition-colors hover:bg-nude md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-nude bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-nude/60 py-3 font-body text-[17px] text-ink transition-colors hover:text-burgund"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setOpen(false);
              openWhatsApp();
            }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgund px-6 py-3 font-body text-[16px] text-white"
          >
            <CalendarHeart className="size-4" />
            Agendar Cita
          </button>
        </div>
      )}
    </header>
  );
}
