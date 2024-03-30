import type { Metadata } from "next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "WattSave",
  description: "Site de gerenciamento de consumo de energia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
