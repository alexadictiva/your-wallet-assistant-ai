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
  title: "Bille | Asistente de Tu Billetera",
  description:
    "Consulta cómo usar Tu Billetera y recibe respuestas claras basadas en la información real del producto.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Tu Billetera",
    description: "Tu asistente de finanzas, siempre cerca.",
    images: [{ url: "/og.png", width: 1728, height: 910 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Billetera",
    description: "Tu asistente de finanzas, siempre cerca.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
