import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicosBrochure } from "@/components/ServicosBrochure";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços Especializados | Arboville",
  description: "Catálogo completo dos 06 serviços técnicos em manejo, poda, supressão, corte de árvores, PRAD e transplante arbóreo da Arboville.",
};

export default function Servicos2Page() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Cabeçalho */}
      <Header />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Seção de Serviços com Layout Estilo Brochure (06 Serviços) */}
      <ServicosBrochure />

      {/* 4. Rodapé */}
      <Footer />
    </main>
  );
}
