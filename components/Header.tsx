"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const [mensagemBusca, setMensagemBusca] = useState("");

  function executarBusca(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      setMensagemBusca("Digite um termo para pesquisar.");
      return;
    }

    const secoes = [
      { id: "servicos", termos: ["serviço", "servicos", "poda", "manejo", "supressão", "vegetação", "árvore", "arvore"] },
      { id: "sobre", termos: ["sobre", "história", "historia", "empresa", "ambiental", "sustentável", "sustentavel"] },
      { id: "recursos", termos: ["recurso", "segurança", "seguranca", "art", "equipamento"] },
      { id: "carreiras", termos: ["carreira", "trabalho", "equipe", "vaga", "currículo", "curriculo"] },
      { id: "contato", termos: ["contato", "orçamento", "orcamento", "telefone", "whatsapp"] },
    ];
    const secao = secoes.find(({ termos }) => termos.some((item) => item.includes(termo) || termo.includes(item)));

    if (!secao) {
      setMensagemBusca(`Nenhum resultado encontrado para “${busca.trim()}”.`);
      return;
    }

    document.getElementById(secao.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMensagemBusca(`Resultado encontrado em ${secao.id}.`);
  }

  return (
    <header className="w-full bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      {/* Linha de destaque verde oliva no topo do site */}
      <div className="w-full h-1 bg-[#5C722D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo, search and secondary links */}
        <div className="flex items-center justify-between py-2.5 sm:py-3 gap-4">
          {/* Logo Arboville (Proporção nativa 300x72 = aspect-[25/6] / aspect-[300/72]) */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-14 sm:h-16 md:h-20 aspect-[300/72] my-1">
              <Image
                src={dadosCliente.logo.horizontalUrl}
                alt={`${dadosCliente.nome} - ${dadosCliente.slogan}`}
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 270px, 340px"
              />
            </div>
          </Link>

          {/* Search Bar and Top Links Desktop */}
          <div className="relative flex items-center gap-6 flex-1 max-w-2xl justify-end">
            {/* Search Input Box with orange search button */}
            <form 
              onSubmit={executarBusca}
              className="relative flex items-center w-full max-w-xs sm:max-w-3xl"
            >
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar serviços..."
                className="w-full h-10 bg-[#FAFAF9] border border-stone-300 rounded-l px-4 text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#445922] focus:border-[#445922]"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="h-10 bg-[#E27412] hover:bg-[#C86109] text-white px-3.5 rounded-r flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
            {mensagemBusca && (
              <p className="absolute top-full mt-1 right-0 text-xs text-[#445922] bg-white px-2 py-1 shadow-sm" role="status">
                {mensagemBusca}
              </p>
            )}

            {/* Top Secondary Links & WhatsApp Direct */}
            <div className="hidden lg:flex items-center gap-3 text-xs text-[#4B5563] font-medium whitespace-nowrap">
              <a
                href={`tel:${dadosCliente.contato.telefone}`}
                className="flex items-center gap-1.5 text-[#1F2937] font-semibold hover:text-[#445922] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#445922]" />
                <span>{dadosCliente.contato.telefoneFormatado}</span>
              </a>
              <span className="text-stone-300">|</span>
              {dadosCliente.navegacaoHeader.barraSuperior.map((item, idx) => (
                <div key={item.titulo} className="flex items-center gap-3">
                  {idx > 0 && <span className="text-stone-300">|</span>}
                  <Link
                    href={item.href}
                    className="hover:text-[#445922] transition-colors"
                  >
                    {item.titulo}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="lg:hidden p-2 text-[#1F2937] hover:text-[#445922] focus:outline-none"
            aria-label="Menu"
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Main Navigation Row Desktop */}
        <nav className="hidden lg:flex items-center justify-between border-t border-stone-100 py-2.5 text-[13px] font-semibold text-[#1F2937]">
          {dadosCliente.navegacaoHeader.itensPrincipais.map((item) => (
            <Link
              key={item.titulo}
              href={item.href}
              className="flex items-center gap-1 hover:text-[#445922] transition-colors py-1 group"
            >
              <span>{item.titulo}</span>
              {item.temDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-[#4B5563] group-hover:text-[#445922] transition-colors" />
              )}
            </Link>
          ))}
          <a
            href={dadosCliente.hero.botaoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E27412] hover:bg-[#C86109] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Orçamento WhatsApp</span>
          </a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {menuAberto && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={executarBusca} className="relative flex items-center">
            <label htmlFor="busca-mobile" className="sr-only">Pesquisar no site</label>
            <input
              id="busca-mobile"
              type="search"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Pesquisar no site..."
              className="w-full bg-[#FAFAF9] border border-stone-300 rounded-l px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-1 focus:ring-[#445922]"
            />
            <button type="submit" aria-label="Buscar" className="bg-[#E27412] text-white px-3.5 py-2.5 rounded-r">
              <Search className="w-4 h-4" />
            </button>
          </form>
          <div className="flex flex-col space-y-2">
            {dadosCliente.navegacaoHeader.itensPrincipais.map((item) => (
              <Link
                key={item.titulo}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="flex items-center justify-between py-2 text-sm font-semibold text-[#1F2937] hover:text-[#445922] border-b border-stone-100"
              >
                <span>{item.titulo}</span>
                {item.temDropdown && <ChevronDown className="w-4 h-4 text-stone-400" />}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 space-y-2">
            <a
              href={`tel:${dadosCliente.contato.telefone}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#1F2937] py-1"
            >
              <Phone className="w-4 h-4 text-[#445922]" />
              <span>{dadosCliente.contato.telefoneFormatado}</span>
            </a>
            <a
              href={dadosCliente.hero.botaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E27412] text-white font-bold text-xs uppercase py-2.5 rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

