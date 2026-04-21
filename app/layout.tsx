import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import ChatWidget from "@/components/user-pages/ChatWidget";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediLink",
  description: "AI Powered Healthcare for Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-foreground bg-background font-primary text-[12px] leading-[1.1] antialiased sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]",
          plusJakartaSans.variable,
          inter.variable,
        )}
      >
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
