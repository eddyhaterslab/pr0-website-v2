import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pr0-website-v2.vercel.app"),
  title: {
    default: "pr0 — Website Modernization Agency",
    template: "%s | pr0",
  },
  description: "We modernize outdated websites for high-value professionals. Strategy, design and engineering that deliver measurable results. Belgium & Netherlands.",
  keywords: ["website modernization", "web redesign", "professional websites", "Belgium", "Netherlands", "Next.js"],
  openGraph: {
    title: "pr0 — Website Modernization Agency",
    description: "We modernize websites that no longer serve the business behind them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}