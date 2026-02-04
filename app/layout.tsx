import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nhận thức luận - Triết học Mác-Lênin",
  description: "Website tổng hợp kiến thức về Nhận thức luận trong Triết học Mác-Lênin, bao gồm nguồn gốc, bản chất, quá trình nhận thức và chân lý.",
  keywords: ["nhận thức luận", "triết học", "Mác-Lênin", "epistemology", "chân lý", "thực tiễn"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navigation />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
