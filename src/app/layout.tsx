import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const museoModerno = localFont({
  src: [
    {
      path: "../assets/fonts/MuseoModerno-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/MuseoModerno-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/MuseoModerno-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/MuseoModerno-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MuseoModerno-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-museo-moderno",
  display: "swap",
});

const beVietnamPro = localFont({
  src: "../assets/fonts/BeVietnamPro-Regular.ttf",
  variable: "--font-be-vietnam-pro",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VLOO - Payments Made Simple",
  description: "Get a card that lets you spend crypto like cash.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${museoModerno.variable} ${beVietnamPro.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
