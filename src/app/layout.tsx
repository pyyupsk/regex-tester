import "@/styles/globals.css";

import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { commonMetaData } from "@/lib/meta";

export const metadata: Metadata = commonMetaData({
  title:
    "Powerful Regex Tester with Cheatsheet - Test and Learn Regex Patterns",
  description:
    "Easily test and learn regular expressions with our interactive Regex Tester. Access a complete cheatsheet, covering basic characters, anchors, character classes, quantifiers, and lookarounds.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
