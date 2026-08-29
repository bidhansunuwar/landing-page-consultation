import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation",
  description:
    "Get a free one-to-one AI marketing consultation and leave with clear priorities for getting more qualified leads.",
  keywords: [
    "AI marketing consultation",
    "digital marketing strategy",
    "lead generation",
    "small business marketing",
  ],
  openGraph: {
    title: "Free AI Marketing Consultation",
    description:
      "Get clear priorities for getting more qualified leads with a free one-to-one AI marketing consultation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation",
    description:
      "Get clear priorities for getting more qualified leads with a free one-to-one AI marketing consultation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '28512740351656033');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* Meta's required fallback pixel must remain a plain img element. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=28512740351656033&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
