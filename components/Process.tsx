const steps = [
  "Fill out the short form below.",
  "Book your free one-to-one consultation.",
  "Receive a customized strategy with practical next steps for your business.",
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 text-white sm:px-6 sm:py-24" aria-labelledby="process-title">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="process-title" className="text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            Consultation Process
          </h2>
        </div>
        <ol className="relative mx-auto mt-10 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-3 md:gap-6" role="list">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-base font-black text-primary shadow-lg">
                {index + 1}
              </div>
              <p className="mt-5 text-lg font-bold leading-7 text-white">{step}</p>
              {index !== steps.length - 1 && (
                <svg viewBox="0 0 24 24" className="absolute -bottom-[1.55rem] left-1/2 h-6 w-6 -translate-x-1/2 rotate-90 text-blue-200 md:-right-[1.15rem] md:left-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
