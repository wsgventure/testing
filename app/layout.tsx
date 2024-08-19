import React from "react";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>{children}</body>
    </html>
  );
}
