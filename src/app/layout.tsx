import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

import I18nInitializer from './_i18nInitializer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crush Lab Poker",
  description: "Seja lucrativo no poker com Crush Lab Poker",
};

import { UserProvider } from "@/context/UserContext";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <I18nInitializer />
            <UserProvider>{children}</UserProvider>
        </body>
    </html>
  );
}
