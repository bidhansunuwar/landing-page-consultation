import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-6 pt-8 sm:px-6 sm:py-16 lg:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_62%,#f8fafc_100%)]" />
      <div className="hero-orb pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl sm:left-[6%] sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-[5%] top-16 -z-10 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-4 sm:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm sm:text-sm">
            FREE AI MARKETING CONSULTATION
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(1.95rem,8.4vw,3.75rem)] font-black leading-[1.02] tracking-[-0.055em] text-ink sm:text-[clamp(2.45rem,4.2vw,3.75rem)]">
            Why Aren’t You Getting <span className="text-primary">Enough Enquiries?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-medium leading-7 text-ink/85 sm:text-xl sm:leading-9 lg:mx-0">
            Get clear priorities to attract more qualified leads and improve your marketing.
          </p>
          <a
            href="#book-consultation"
            className="group relative mt-6 inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-primary sm:w-auto sm:px-9 sm:text-lg"
          >
            <span className="relative">Book Your Free Consultation</span>
            <svg viewBox="0 0 24 24" className="relative ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-3 text-sm font-medium leading-6 text-muted">Free one-to-one call · Practical next steps · No pressure</p>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[27rem] lg:max-w-none">
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
          <p className="mt-1 text-center text-sm font-semibold text-ink/80">Bidhan Sunuwar · AI Marketing Consultant</p>
        </div>
      </div>
    </section>
  );
}
