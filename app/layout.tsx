import type { Metadata, Viewport } from "next";
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
      <body>{children}</body>
    </html>
  );
}
