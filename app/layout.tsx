import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { dadosCliente } from "@/data/cliente";
import { WhatsAppFlutuante } from "@/components/WhatsAppFlutuante";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const viewport: Viewport = {
  themeColor: dadosCliente.cores.primary,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${dadosCliente.nome} | ${dadosCliente.slogan}`,
  description: dadosCliente.descricao,
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${dadosCliente.nome} | Poda e Cuidados com a Árvore em ${dadosCliente.localizacao.cidade}/${dadosCliente.localizacao.estado}`,
    description: dadosCliente.descricao,
    url: "https://www.arboville.com.br",
    siteName: dadosCliente.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: dadosCliente.logo.horizontalUrl,
        width: 1200,
        height: 630,
        alt: `${dadosCliente.nome} - ${dadosCliente.slogan}`,
      },
    ],
  },
  other: {
    "geo.region": `BR-${dadosCliente.localizacao.estado}`,
    "geo.placename": dadosCliente.localizacao.cidade,
    "geo.position": `${dadosCliente.localizacao.latitude};${dadosCliente.localizacao.longitude}`,
    ICBM: `${dadosCliente.localizacao.latitude}, ${dadosCliente.localizacao.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={openSans.variable}>
      <body className={`${openSans.className} min-h-screen bg-[#FAFAF9] text-[#1F2937] antialiased flex flex-col font-sans`}>
        {children}
        <WhatsAppFlutuante />
      </body>
    </html>
  );
}

