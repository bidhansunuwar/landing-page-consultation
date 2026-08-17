export function Problem() {
  return (
    <section className="border-y border-slate-200/80 bg-white px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="problem-title">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">For small and medium business owners</p>
          <h2 id="problem-title" className="mt-4 max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl">
            Inconsistent leads and scattered marketing.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            <p>This consultation is for small and medium business owners with inconsistent leads and scattered marketing.</p>
            <p>We’ll look at what may be stopping more people from finding, trusting, and contacting your business online.</p>
            <p>You’ll get practical next steps based on your business.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-cloud p-6 shadow-sm sm:p-8">
          <p className="text-xl font-black leading-8 tracking-[-0.025em] text-ink sm:text-2xl">
            Find what to focus on first.
          </p>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Get clear marketing priorities for your business, including where AI and automation may help save time.
          </p>
        </div>
      </div>
    </section>
  );
}
