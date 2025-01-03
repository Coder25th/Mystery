import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Mystery",
  description: "Platform to ask quesitons anonymously?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <AuthProvider>
        <body className="">
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
