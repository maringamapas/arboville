import Image from "next/image";
import Link from "next/link";
import { Trees, Scissors, Axe, ShieldAlert, Sprout, Move3d } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function ServicosGrid() {
  const { servicosGrid } = dadosCliente;

  const renderServiceIcon = (icone?: string) => {
    switch (icone) {
      case "tree-pine":
        return <Trees className="w-5 h-5 text-white" />;
      case "scissors":
        return <Scissors className="w-5 h-5 text-white" />;
      case "axe":
        return <Axe className="w-5 h-5 text-white" />;
      case "shield-alert":
        return <ShieldAlert className="w-5 h-5 text-white" />;
      case "sprout":
        return <Sprout className="w-5 h-5 text-white" />;
      case "move-3d":
        return <Move3d className="w-5 h-5 text-white" />;
      default:
        return <Trees className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="servicos" className="w-full bg-[#F5F4EB] py-14 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-bold text-[#E67F12] uppercase tracking-widest block mb-1">
            {dadosCliente.nome} • Especialidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#596020] tracking-tight whitespace-pre-line">
            {servicosGrid.titulo}
          </h2>
          {servicosGrid.subtitulo && (
            <p className="text-xs sm:text-sm text-[#2B2A28] mt-2 max-w-2xl mx-auto whitespace-pre-line">
              {servicosGrid.subtitulo}
            </p>
          )}
        </div>

        {/* 6 Cards Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicosGrid.items.map((servico, index) => (
            <Link
              key={servico.id}
              href={servico.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full h-[320px] sm:h-[360px] md:h-[390px] overflow-hidden rounded-sm shadow-md transition-shadow hover:shadow-xl border border-stone-200 bg-stone-900"
            >
              {/* Background Image */}
              <Image
                src={servico.imagemUrl}
                alt={servico.titulo}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Subtle Gradient bottom/top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Service Number & Icon Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#E67F12] text-white text-xs font-black flex items-center justify-center shadow-md">
                  {index + 1}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#596020]/90 text-white flex items-center justify-center p-1 backdrop-blur-xs">
                  {renderServiceIcon(servico.icone)}
                </div>
              </div>

              {/* Floating Green Badge with White Border as seen in reference */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                <div className="bg-[#596020] border border-white/80 px-4 py-1.5 shadow-lg">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wide block leading-tight">
                    {servico.titulo}
                  </span>
                </div>
              </div>

              {/* Bottom Details & CTA on Hover */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <p className="text-xs text-stone-200 line-clamp-2 mb-2 font-medium">
                  {servico.descricao}
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E67F12] group-hover:text-amber-300 transition-colors uppercase tracking-wider">
                  <span>Solicitar Orçamento</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

