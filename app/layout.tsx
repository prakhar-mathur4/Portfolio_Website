import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://prakharmathur.in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prakhar Mathur | Site Reliability Engineer & AIOps Specialist",
  description:
    "Prakhar Mathur — Site Reliability Engineer & AIOps Specialist. Building scalable, AI-ready infrastructure on AWS & Kubernetes. Expert in AIOps, MLOps observability, cloud-native automation, and production reliability.",
  keywords: [
    "Site Reliability Engineer",
    "SRE",
    "AIOps",
    "MLOps",
    "Kubernetes",
    "AWS",
    "DevOps",
    "Observability",
    "Cloud Native",
    "Prometheus",
    "Grafana",
    "Terraform",
    "Platform Engineering",
  ],
  authors: [{ name: "Prakhar Mathur", url: SITE_URL }],
  creator: "Prakhar Mathur",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Prakhar Mathur | Site Reliability Engineer & AIOps Specialist",
    description:
      "Building scalable, AI-ready infrastructure on AWS & Kubernetes. Specializing in AIOps, MLOps observability, automation, and cloud-native systems.",
    url: SITE_URL,
    siteName: "Prakhar Mathur Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-preview.png", width: 1200, height: 630, alt: "Prakhar Mathur — SRE & AIOps Specialist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Mathur | Site Reliability Engineer & AIOps Specialist",
    description:
      "Building scalable, AI-ready infrastructure on AWS & Kubernetes. Expert in AIOps, MLOps, Kubernetes, Prometheus, and cloud-native reliability.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prakhar Mathur",
              jobTitle: "Site Reliability Engineer",
              description:
                "Site Reliability Engineer and AIOps Specialist with 3+ years building scalable cloud infrastructure on AWS and Kubernetes.",
              url: SITE_URL,
              email: "mathurprakhar1@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/mathurprakhar1/",
                "https://github.com/prakhar-mathur4",
              ],
              knowsAbout: [
                "Site Reliability Engineering",
                "Kubernetes",
                "AWS",
                "AIOps",
                "Observability",
                "DevOps",
                "Prometheus",
                "Grafana",
                "Terraform",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-slate-50 text-gray-900 antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
