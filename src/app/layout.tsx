import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSANDYPR",
  description: "Muhammad Sandy Putra Riyadi - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
