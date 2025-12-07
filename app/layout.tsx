import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Repliq — Your Digital Identity, Decentralized",
  description: "A new way to own your profile, your avatar, your reputation — all on-chain. Join the waitlist for early access.",
  keywords: ["web3", "decentralized identity", "NFT", "blockchain", "social", "on-chain"],
  authors: [{ name: "Repliq" }],
  openGraph: {
    title: "Repliq — Your Digital Identity, Decentralized",
    description: "A new way to own your profile, your avatar, your reputation — all on-chain.",
    type: "website",
    siteName: "Repliq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repliq — Your Digital Identity, Decentralized",
    description: "A new way to own your profile, your avatar, your reputation — all on-chain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
