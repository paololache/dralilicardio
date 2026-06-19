const STATS = [
  { value: "13+", label: "Años de experiencia" },
  { value: "5000+", label: "Pacientes atendidos" },
  { value: "RNE 46616", label: "Registro Nacional de Especialista" },
  { value: "100%", label: "Atención personalizada" },
];

export function Stats() {
  return (
    <section className="bg-[linear-gradient(135deg,#570228_0%,#8a1040_100%)] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:gap-y-0">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center lg:px-6 ${
              i > 0 ? "lg:border-l lg:border-white/20" : ""
            }`}
          >
            <span className="font-display text-[26px] leading-none text-white break-words sm:text-[32px] lg:text-[40px]">{s.value}</span>
            <span className="mt-2 font-body text-[12px] tracking-wide text-pink sm:text-[13px] lg:text-[14px]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
