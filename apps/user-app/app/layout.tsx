import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { Inter } from "next/font/google";
import { AppbarClient } from "../component/AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "paymentApp",
  description: "Created for a dummy payment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <AppbarClient />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
