import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "Bliss",
  description: "Generated by create next app",
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
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
