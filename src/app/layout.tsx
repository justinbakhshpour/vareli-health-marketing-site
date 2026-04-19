import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varelihealth.com"),
  title: {
    default: "Vareli Health — Institutional Control for Autonomous Robotic Labor",
    template: "%s — Vareli Health",
  },
  description:
    "Vareli is the institutional control layer for autonomous robotic labor in hospitals — authorizing every action, enforcing institutional policy, and maintaining the operational record your organization requires.",
  openGraph: {
    type: "website",
    siteName: "Vareli Health",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable}`}
    >
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8JK89XW8JS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8JK89XW8JS');
          `}
        </Script>
      </body>
    </html>
  );
}
