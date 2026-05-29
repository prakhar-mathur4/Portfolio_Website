import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
  authors: [{ name: "Prakhar Mathur", url: "https://prakhar-mathur4.github.io/" }],
  creator: "Prakhar Mathur",
  metadataBase: new URL("https://prakhar-mathur4.github.io/"),
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
    url: "https://prakhar-mathur4.github.io/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
              url: "https://prakhar-mathur4.github.io/",
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
      <body className="bg-slate-50 text-gray-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
