import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

import I18nInitializer from '../i18n/initializer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crush Lab Poker",
  description: "Seja lucrativo no poker com Crush Lab Poker",
};

import { UserProvider } from "@/context/UserContext";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en-US">
        <body className={inter.className}>
            <I18nInitializer />
            <Header />
             <UserProvider>{children}</UserProvider>
        </body>
    </html>
  );
}
