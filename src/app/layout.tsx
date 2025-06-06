import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SideQuest - Festival Schedule Planning App",
  description: "Plan, share, and vote on your festival schedules with SideQuest. The ultimate festival companion for music lovers.",
  keywords: ["festival app", "music festival", "schedule planner", "festival schedule", "group planning", "voting app"],
  openGraph: {
    title: "SideQuest - Festival Schedule Planning App",
    description: "Plan, share, and vote on your festival schedules with SideQuest",
    url: "https://sidequest.com",
    siteName: "SideQuest",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SideQuest - Festival Schedule Planning App",
    description: "Plan, share, and vote on your festival schedules with SideQuest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
