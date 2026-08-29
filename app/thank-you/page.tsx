import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You | Free AI Marketing Consultation",
  description: "Your free AI marketing consultation request has been received.",
  openGraph: {
    title: "Thank You | Free AI Marketing Consultation",
    description: "Your free AI marketing consultation request has been received.",
  },
};

const whatsappUrl = "https://wa.me/message/A4SBUNT4IUFKP1";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cloud">
      <Header />

      <section className="relative isolate px-5 pb-12 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_50%_0%,rgba(191,219,254,0.7),transparent_63%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white text-primary shadow-card" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.25">
              <path d="m5 12 4.1 4.1L19 6.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl">
            Your Consultation Seat Is Reserved
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            You’ve taken the first step toward getting clearer on what may be holding back your enquiries.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-5 shadow-card sm:mt-16 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Your next step is simple</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
              Watch This Short Video Before Your Consultation
            </h2>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-ink shadow-glow">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/h48G5u-b1tI"
              title="What Happens Next—and How to Get the Most From Your Free AI Marketing Consultation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <h3 className="text-2xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-3xl">
              What Happens Next—and How to Get the Most From Your Free AI Marketing Consultation
            </h3>
            <div className="mt-6 space-y-5 text-base leading-7 text-muted">
              <p>Hi, and thank you for requesting your free AI marketing consultation.</p>
              <p>
                In this call, we’ll look at your current marketing, your lead flow, and what may be stopping more qualified customers from contacting your business.
              </p>
              <p>
                You’ll get clear priorities based on your business, including where to focus first and where AI or automation may help save time.
              </p>
              <p>Before the call, please think about your biggest marketing challenge right now.</p>
              <div className="rounded-2xl bg-mist p-5">
                <p className="font-bold text-ink">For example:</p>
                <ul className="mt-3 space-y-2" role="list">
                  {[
                    "Not getting enough enquiries",
                    "Getting leads but not enough sales",
                    "Wasting money on ads",
                    "Not knowing which marketing channel works",
                    "Not having time to market consistently",
                  ].map((challenge) => (
                    <li key={challenge} className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="m5 12 4.1 4.1L19 6.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                If you have any questions or would like to share more about your business before the call, send me a message on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-8 max-w-4xl rounded-[2rem] bg-ink px-6 py-10 text-center text-white shadow-card sm:mt-10 sm:px-10 sm:py-12" aria-labelledby="speak-sooner-title">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Want to Speak Sooner?</p>
          <h2 id="speak-sooner-title" className="mx-auto mt-3 max-w-xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
            Send me a WhatsApp message with your business name and biggest marketing challenge.
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-ink transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-white"
          >
            <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2a9.84 9.84 0 0 0-8.36 15.04L2.23 22l5.11-1.34A9.98 9.98 0 1 0 12.04 2Zm5.8 14.02c-.24.68-1.4 1.28-1.93 1.35-.5.07-1.12.1-1.8-.12-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.4-.14-.2-1.18-1.58-1.18-3.02 0-1.44.76-2.14 1.03-2.43.27-.29.59-.36.78-.36.2 0 .4 0 .57.01.19.01.45-.07.7.52.25.6.85 2.06.92 2.2.08.15.13.32.02.52-.1.2-.16.32-.32.5-.16.18-.33.4-.47.54-.16.16-.32.34-.14.67.18.33.78 1.28 1.68 2.08 1.16 1.03 2.13 1.35 2.44 1.5.3.15.48.12.66-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.07.12.07.7-.17 1.38Z" />
            </svg>
            Message Me on WhatsApp
          </a>
        </section>
      </section>
    </main>
  );
}
