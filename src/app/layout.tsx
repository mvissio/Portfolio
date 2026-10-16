import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Vissio — Engineering Portfolio",
  description: "An evidence-led engineering portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
