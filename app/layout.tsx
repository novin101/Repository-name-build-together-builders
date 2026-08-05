import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    default: "Build Together Builders",
    template: "%s | Build Together Builders",
  },
  description:
    "Build Together Builders provides professional construction, remodeling, outdoor living, and property improvement services throughout Southern California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
