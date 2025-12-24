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
  title: "VLOO - Access, designed for the right time.",
  description: "VLOO lets you assign ownership without forcing timing. Create access today — let it be claimed when the moment is right.",
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
