import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVP Timeline Generator — Realistic Timelines for Startups",
  description: "Input your MVP features and get accurate development timelines with resource allocation. Built for non-technical founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2609eca1-8e59-40c8-91e7-172110351af7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
