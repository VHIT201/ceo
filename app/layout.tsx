import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meu-solutions.com"),
  title: "Trần Thanh Tuyền — CEO & Managing Director, MeU Solutions | Technology Executive & AI-Powered SaaS",
  description: "Trần Thanh Tuyền, Thạc sĩ, CEO & Giám đốc Quản lý MeU Solutions. Đồng trưởng Làng Design Thinking tại Techfest Việt Nam. Chuyên gia về Cloud-native, microservices, AI-powered SaaS products (One2 Ecosystem, Shinobi AI, Anawork). Đánh giá 5.0/5 trên GoodFirms, 4.5/5 trên Clutch.",
  keywords: ["Trần Thanh Tuyền", "CEO MeU Solutions", "Technology Executive", "AI SaaS", "Software Testing", "Context-Driven Testing", "Design Thinking", "One2 Ecosystem", "Shinobi AI", "Anawork", "Cloud-native", "Microservices", "Offshore Development"],
  openGraph: {
    type: "website",
    siteName: "MeU Solutions",
    title: "Trần Thanh Tuyền — CEO & Managing Director, MeU Solutions | Technology Executive & AI-Powered SaaS",
    description: "Trần Thanh Tuyền, Thạc sĩ, CEO & Giám đốc Quản lý MeU Solutions. Đồng trưởng Làng Design Thinking tại Techfest Việt Nam. Chuyên gia về Cloud-native, microservices, AI-powered SaaS products (One2 Ecosystem, Shinobi AI, Anawork). Đánh giá 5.0/5 trên GoodFirms, 4.5/5 trên Clutch.",
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1d8suqQSbB0eWIZSOSs7JpStaQkoIuhmD",
        width: 800,
        height: 1000,
        alt: "Trần Thanh Tuyền — CEO & Managing Director, MeU Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Thanh Tuyền — CEO & Managing Director, MeU Solutions | Technology Executive & AI-Powered SaaS",
    description: "Trần Thanh Tuyền, Thạc sĩ, CEO & Giám đốc Quản lý MeU Solutions. Đồng trưởng Làng Design Thinking tại Techfest Việt Nam. Chuyên gia về Cloud-native, microservices, AI-powered SaaS products (One2 Ecosystem, Shinobi AI, Anawork). Đánh giá 5.0/5 trên GoodFirms, 4.5/5 trên Clutch.",
    images: ["https://drive.google.com/uc?export=view&id=1d8suqQSbB0eWIZSOSs7JpStaQkoIuhmD"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased overflow-x-hidden scrollbar-hide`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
