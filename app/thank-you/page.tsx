import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ThankYouTracking } from "@/components/ThankYouTracking";

export const metadata: Metadata = {
  title: "You're All Set! | Free AI Marketing Consultation",
  description: "Your free AI marketing consultation request has been received.",
  openGraph: {
    title: "You're All Set! | Free AI Marketing Consultation",
    description: "Your free AI marketing consultation request has been received.",
  },
};

// Replace this URL with another YouTube or Vimeo embed URL when your video changes.
const videoEmbedUrl = "https://www.youtube.com/embed/h48G5u-b1tI";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cloud">
      <ThankYouTracking />
      <Header />

      <section className="relative isolate px-5 py-12 sm:px-6 sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(219,234,254,0.78),transparent_63%)]" />

        <div className="mx-auto max-w-[51rem] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Free AI Marketing Consultation</p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl">
            You’re All Set!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Thanks for reaching out. Your request has been received, and we’ll get back to you shortly.
          </p>

          <div className="mx-auto mt-8 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm sm:px-5">
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Next step: Watch this short video</span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            This 15-second video explains what happens next and how we can help you get better marketing results.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-card sm:mt-10 sm:p-3">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-ink">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={videoEmbedUrl}
                title="What happens next after your AI marketing consultation request"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-7 text-base font-medium text-ink sm:text-lg">
            No pressure — just practical next steps tailored to your business.
          </p>
          <section className="mt-8 rounded-2xl border border-blue-100 bg-white px-5 py-6 shadow-sm sm:px-8" aria-labelledby="whatsapp-title">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Want to speak sooner?</p>
            <h2 id="whatsapp-title" className="mt-2 text-xl font-black tracking-[-0.025em] text-ink sm:text-2xl">
              Send me a message on WhatsApp.
            </h2>
            <a
              href="https://wa.me/message/A4SBUNT4IUFKP1"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-primary"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2a9.84 9.84 0 0 0-8.36 15.04L2.23 22l5.11-1.34A9.98 9.98 0 1 0 12.04 2Zm5.8 14.02c-.24.68-1.4 1.28-1.93 1.35-.5.07-1.12.1-1.8-.12-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.4-.14-.2-1.18-1.58-1.18-3.02 0-1.44.76-2.14 1.03-2.43.27-.29.59-.36.78-.36.2 0 .4 0 .57.01.19.01.45-.07.7.52.25.6.85 2.06.92 2.2.08.15.13.32.02.52-.1.2-.16.32-.32.5-.16.18-.33.4-.47.54-.16.16-.32.34-.14.67.18.33.78 1.28 1.68 2.08 1.16 1.03 2.13 1.35 2.44 1.5.3.15.48.12.66-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.07.12.07.7-.17 1.38Z" />
              </svg>
              Message Me on WhatsApp
            </a>
          </section>
          <Link href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-blue-200 underline-offset-4 transition hover:text-primary-dark focus-visible:outline-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
