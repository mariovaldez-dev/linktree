import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mordisqueo Snacks",
  description: "Linktree template website",
  keywords: ["Mordisqueo Snacks", "Linktree", "Linktree template", "Linktree template website"],
  authors: [
    {
      name: "Mordisqueo Snacks",
      url: "https://mordisqueo.com",
    },
  ],
  icons: {
    icon: '/mordisqueosmall.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
