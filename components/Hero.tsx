import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-16 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_62%,#f8fafc_100%)]" />
      <div className="hero-orb pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl sm:left-[6%] sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-[5%] top-16 -z-10 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm sm:text-sm">
            Free AI Marketing Consultation
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-black leading-[1.02] tracking-[-0.055em] text-ink">
            Find <span className="text-primary">Why</span> Your Business Isn’t Getting Enough Enquiries
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg font-medium leading-8 text-ink/85 sm:text-xl sm:leading-9 lg:mx-0">
            Get a free one-to-one AI marketing consultation and leave with clear priorities for getting more qualified leads.
          </p>
          <div className="mx-auto mt-4 max-w-2xl space-y-1 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:mx-0">
            <p>This consultation is for small and medium business owners with inconsistent leads and scattered marketing.</p>
            <p>We’ll look at what may be stopping more people from finding, trusting, and contacting your business online.</p>
            <p>You’ll get practical next steps based on your business.</p>
          </div>
          <a
            href="#book-consultation"
            className="group relative mt-6 inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-primary sm:px-9 sm:text-lg"
          >
            <span className="relative">Book Your Free Consultation</span>
            <svg viewBox="0 0 24 24" className="relative ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[27rem] lg:max-w-none">
          <div className="absolute inset-x-[10%] bottom-[6%] top-[14%] -z-10 rounded-[40%] bg-blue-100/75 blur-2xl" />
          <Image
            src="/images/bidhan-portrait.png"
            alt="Bidhan Sunuwar, AI marketing consultant"
            width={1200}
            height={1500}
            priority
            sizes="(max-width: 1023px) min(90vw, 432px), 480px"
            className="mx-auto h-auto w-full object-contain lg:h-[520px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
