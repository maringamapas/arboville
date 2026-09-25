import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { CarreirasBanner } from "@/components/CarreirasBanner";
import { ServicosGrid } from "@/components/ServicosGrid";
import { Recursos } from "@/components/Recursos";
import { CtaContato } from "@/components/CtaContato";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header com busca e navegação */}
      <Header />

      {/* 2. Hero principal com banner e card lateral */}
      <Hero />

      {/* 3. Seção Sobre/História da Empresa */}
      <Historia />

      {/* 4. Banner de Carreiras / Trabalhe Conosco */}
      <CarreirasBanner />

      {/* 5. Grid de Serviços 2x2 (Residencial, Comercial, Utilidade Pública, Ambiental) */}
      <ServicosGrid />

      {/* 6. Recursos, Notícias e Podcast (3 Cards Verdes) */}
      <Recursos />

      {/* 7. Banner de Contato com Especialistas */}
      <CtaContato />

      {/* 8. Newsletter e Listas de E-mail */}
      <Newsletter />

      {/* 9. Rodapé completo institucional */}
      <Footer />
    </main>
  );
}
