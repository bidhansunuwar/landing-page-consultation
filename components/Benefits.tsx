const benefits = [
  "Find your biggest lead-generation bottlenecks",
  "See where potential customers may be dropping off",
  "Get clear marketing priorities for the next 30 days",
  "Learn where AI and automation can save time",
  "Know which marketing actions deserve your attention first",
];

const icons = [
  <path key="one" d="M12 3v18M3 12h18" strokeLinecap="round" />,
  <path key="two" d="M4 19 9 14l4 3 7-9M16 8h4v4" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="three" d="M5 4v16M5 16h14M9 12v4M14 8v8M19 5v11" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="four" d="M9 18h6M10 22h4M8.4 14.7A6.5 6.5 0 1 1 15.6 14.7c-.9.7-1.4 1.5-1.5 2.3H9.9c-.1-.8-.6-1.6-1.5-2.3Z" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="five" d="m5 12 4 4L19 6M5 6h6M5 18h6" strokeLinecap="round" strokeLinejoin="round" />,
];

export function Benefits() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="benefits-title" className="text-4xl font-black leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl">
            How You Benefit From This Consultation
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:gap-5">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="group min-h-40 rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-glow sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-primary transition group-hover:bg-primary group-hover:text-white" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  {icons[index]}
                </svg>
              </div>
              <p className="mt-5 text-lg font-bold leading-7 tracking-[-0.015em] text-ink">{benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
