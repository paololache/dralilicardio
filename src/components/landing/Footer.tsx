import { Heart } from "lucide-react";
import lilicardioLogo from "@/assets/lilicardio-logo-cropped.png";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-burgund py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <img
            src={lilicardioLogo}
            alt="Lilicardio"
            width={150}
            height={70}
            className="mx-auto h-12 w-auto sm:h-14 lg:mx-0 lg:h-16"
          />
          <p className="mt-2 max-w-sm font-body text-[15px] text-pink">
            Dra. Liliana Fonseca · Especialista en Cardiología. Escuchar tu corazón es entender
            tu vida.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[16px] text-white/90 transition-colors hover:text-pink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-5 pt-6 sm:px-8">
        <p className="flex items-center justify-center gap-1.5 font-body text-[14px] text-pink/80">
          © {new Date().getFullYear()} Lilicardio · Hecho con
          <Heart className="size-3.5 fill-pink text-pink" />
          para el cuidado de tu corazón
        </p>
      </div>
    </footer>
  );
}
