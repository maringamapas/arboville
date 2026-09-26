"use client";

import React from "react";
import Image from "next/image";
import { dadosCliente } from "@/data/cliente";
import { formatarWhatsapp } from "@/lib/whatsapp";
import {
  Trees,
  Scissors,
  Axe,
  ShieldAlert,
  Sprout,
  Move,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";

// Mapeamento de ícones dinâmicos
const iconesServicos: Record<string, React.ReactNode> = {
  TreePine: <Trees className="w-6 h-6 text-white" />,
  Scissors: <Scissors className="w-6 h-6 text-white" />,
  Axe: <Axe className="w-6 h-6 text-white" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-white" />,
  Sprout: <Sprout className="w-6 h-6 text-white" />,
  Move: <Move className="w-6 h-6 text-white" />,
};

export function ServicosBrochure() {
  const { servicosBrochure, contato } = dadosCliente;

  return (
    <section
      id="catalogo-servicos"
      className="w-full border-t-4 border-[#596020] bg-[#F5F4EB] py-16 sm:py-20 lg:py-28 overflow-hidden relative scroll-mt-28"
    >
      {/* Elementos decorativos de fundo geométricos inspirados no template */}
      <div className="absolute top-12 left-[-100px] w-72 h-72 rounded-full bg-[#596020]/10 blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 right-[-80px] w-96 h-96 rounded-full bg-[#596020]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#E67F12]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#596020]/10 border border-[#596020]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#596020]" />
            <span className="text-xs font-bold tracking-wider text-[#596020] uppercase">
              {servicosBrochure.tagSuperior}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2A28] tracking-tight leading-tight mb-4">
            {servicosBrochure.titulo}
          </h2>

          <p className="text-base sm:text-lg text-[#2B2A28] leading-relaxed">
            {servicosBrochure.subtitulo}
          </p>

          {/* Navegação Rápida entre os 6 Serviços */}
          <div className="mt-8 flex min-h-24 flex-wrap items-center justify-center gap-2 sm:gap-3">
            {servicosBrochure.itens.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-[#2B2A28] hover:border-[#596020] hover:text-[#596020] hover:bg-[#596020]/5 transition-all shadow-xs"
              >
                <span className="w-5 h-5 rounded-full bg-[#596020] text-[#1E2A16] flex items-center justify-center text-[10px] font-black">
                  {item.numero}
                </span>
                <span>{item.titulo}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Lista dos 6 Serviços com Layout Estilo Brochure */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {servicosBrochure.itens.map((servico, index) => {
            const isPar = index % 2 === 1;
            const linkWhatsapp = formatarWhatsapp(
              contato.whatsapp,
              servico.mensagemWhatsapp
            );

            return (
              <article
                key={servico.id}
                id={servico.id}
                className="relative scroll-mt-40 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isPar ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Coluna Visual: Composição Circular estilo Brochure */}
                  <div
                    className={`lg:col-span-5 relative flex justify-center items-center ${
                      isPar ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                      {/* Círculo decorativo de fundo / Lime Accent */}
                      <div className="absolute -top-4 -left-4 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#596020] opacity-90 -z-10" />

                      {/* Círculo decorativo secundário cinza / neutro */}
                      <div className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-stone-200/90 -z-10" />

                      {/* Círculo com Borda de Destaque Verde Oliva */}
                      <div className="absolute inset-0 rounded-full border-4 border-white shadow-xl overflow-hidden bg-stone-100">
                        <Image
                          src={servico.imagemUrl}
                          alt={servico.titulo}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Badge do Número (01..06) */}
                      <div className="absolute -top-2 right-4 sm:top-2 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#596020] text-white flex items-center justify-center shadow-lg border-2 border-white z-20">
                        <span className="text-xl sm:text-2xl font-black leading-none text-white tracking-tight">
                          {servico.numero}
                        </span>
                      </div>

                      {/* Ícone flutuante do serviço */}
                      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E67F12] flex items-center justify-center shadow-md border-2 border-white z-20">
                        {iconesServicos[servico.icone] || (
                          <Trees className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Coluna de Conteúdo Editorial */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center ${
                      isPar ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Badge da Categoria */}
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#596020]/20 border border-[#596020]/40 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#596020]" />
                      <span className="text-xs font-bold text-[#596020] uppercase tracking-wide">
                        {servico.badge}
                      </span>
                    </div>

                    {/* Título Principal */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2A28] tracking-tight mb-3">
                      {servico.titulo}
                    </h3>

                    {/* Subtítulo / Lead em destaque */}
                    <div className="p-4 rounded-xl bg-[#596020]/5 border-l-4 border-[#596020] mb-4">
                      <p className="text-sm sm:text-base font-semibold text-[#2B2A28] leading-relaxed">
                        {servico.subtitulo}
                      </p>
                    </div>

                    {/* Descrição Técnica */}
                    <p className="text-sm sm:text-base text-[#2B2A28] leading-relaxed mb-6 whitespace-pre-line">
                      {servico.descricao}
                    </p>

                    {/* Diferenciais Técnicos em Grid */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#596020] mb-3">
                        Destaques e Procedimentos Técnicos:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {servico.diferenciais.map((dif, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#2B2A28]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#596020] shrink-0 mt-0.5" />
                            <span>{dif}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Box de Alerta / Risco & Urgência */}
                    <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] mb-6 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#E67F12] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold text-[#92400E] uppercase tracking-wider block">
                          Atenção & Risco Operacional:
                        </span>
                        <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
                          {servico.alerta}
                        </p>
                      </div>
                    </div>

                    {/* Ação / Botão WhatsApp com Texto Personalizado */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                      <a
                        href={linkWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#E67F12] hover:bg-[#C86109] text-white font-bold text-sm sm:text-base transition-colors shadow-sm hover:shadow-md text-center"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>{servico.botaoTexto}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href={`https://wa.me/${contato.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-white border border-stone-300 hover:border-[#596020] text-xs sm:text-sm font-semibold text-[#2B2A28] hover:text-[#596020] transition-colors text-center"
                      >
                        Dúvidas Rápidas via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Rodapé / Banner inferior da seção */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-linear-to-r from-[#1E2A16] to-[#596020] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#596020]">
              Atendimento Técnico Especializado
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Precisa de um laudo técnico ou vistoria no seu imóvel?
            </h3>
            <p className="text-stone-200 text-sm max-w-2xl">
              Nossos engenheiros e arboristas atendem Joinville e região com agilidade e emissão de ART.
            </p>
          </div>

          <a
            href={formatarWhatsapp(
              contato.whatsapp,
              "Olá! Gostaria de agendar uma vistoria técnica com a Arboville."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E67F12] hover:bg-[#C86109] text-white font-bold text-sm sm:text-base transition-colors shadow-lg"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Solicitar vistoria</span>
          </a>
        </div>
      </div>
    </section>
  );
}
