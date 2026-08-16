const problems = [
  "Inconsistent leads",
  "Scattered marketing",
  "What may be stopping more people from finding, trusting, and contacting your business online",
];

export function Problem() {
  return (
    <section className="border-y border-slate-200/80 bg-white px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="problem-title">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">For small and medium business owners</p>
          <h2 id="problem-title" className="mt-4 max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl">
            Inconsistent leads and scattered marketing.
          </h2>
        </div>
        <div className="space-y-3">
          {problems.map((problem, index) => (
            <div key={problem} className="flex gap-4 rounded-2xl border border-slate-100 bg-cloud px-5 py-5 shadow-sm sm:px-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-primary" aria-hidden="true">
                {index + 1}
              </span>
              <p className="pt-0.5 text-base font-semibold leading-7 text-ink sm:text-lg">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
