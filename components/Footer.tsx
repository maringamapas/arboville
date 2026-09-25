"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Phone, Mail } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function Footer() {
  const { rodape, logo, contato, localizacao } = dadosCliente;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#596020] text-white text-xs pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 pb-12 border-b border-stone-700/50">
          {rodape.colunas.map((coluna) => (
            <div key={coluna.titulo} className="space-y-3">
              <h4 className="font-bold text-white text-xs tracking-tight border-b border-stone-600/40 pb-1.5">
                {coluna.titulo}
              </h4>
              <ul className="space-y-2">
                {coluna.links.map((link) => (
                  <li key={link.titulo}>
                    <Link
                      href={link.href}
                      className="text-stone-300 hover:text-amber-300 transition-colors text-[11px] leading-tight block"
                    >
                      {link.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand, Corporate Address & Social Section */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo & Corporate Address */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative h-14 sm:h-16 aspect-[300/72] flex-shrink-0">
              <Image
                src="/logo-footer-arboville-2.svg"
                alt={`${dadosCliente.nome} - ${logo.subtexto}`}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 240px, 300px"
              />
            </div>

            <div className="text-[11px] text-stone-300 space-y-1 border-l border-stone-700/60 pl-4">
              <p className="font-bold text-white text-xs whitespace-pre-line">{dadosCliente.nome}</p>
              <p className="text-stone-300 whitespace-pre-line leading-relaxed">
                {rodape.sobreEmpresa}
              </p>
              <div className="pt-2 space-y-1">
                <p className="flex items-center gap-1.5 text-stone-300">
                  <Phone className="w-3.5 h-3.5 text-[#E67F12]" />
                  {contato.telefoneFormatado}
                </p>
                <p className="flex items-center gap-1.5 text-stone-300">
                  <Mail className="w-3.5 h-3.5 text-[#E67F12]" />
                  {contato.email}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Link */}
          <div className="flex flex-col md:items-end space-y-3">
            <span className="text-xs font-semibold text-white tracking-wide">
              Siga a Arboville
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 bg-[#596020] hover:bg-[#4A501A] text-white rounded flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Very Bottom Bar with Legal Links, Copyright and Back to Top Button */}
      <div className="bg-[#2B2A28] py-4 border-t border-stone-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-3 text-center text-[11px] text-stone-400">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-right">
            <p>{rodape.copyright}</p>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>
              Criado por{" "}
              <a
                href="https://webstudio.gmaps.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E67F12] hover:text-[#F08A2B] font-semibold transition-colors"
              >
                Webstudio
              </a>
            </span>
          </div>
        </div>

        {/* Back to top button positioned on right */}
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="absolute right-4 bottom-4 w-9 h-9 bg-[#E67F12] hover:bg-[#B9650E] text-white rounded-t flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}


