import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SBN INFRA PROJECT PRIVATE LIMITED",
    template: "%s | SBN INFRA PROJECT PRIVATE LIMITED",
  },
  description:
    "SBN Infra Project Private Limited is a leading construction company in India specializing in industrial, commercial, and urban infrastructure projects. With over 20 years of expertise, we are committed to quality, innovation, and sustainable development across multiple states.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="bY96x0AbbFHr2pyy0QqY2z53MLXwS8wKlm-nHiHOWFU"
        />
      </head>
      <body className={`font-dm-sans antialiased`}>{children}</body>
    </html>
  );
}
