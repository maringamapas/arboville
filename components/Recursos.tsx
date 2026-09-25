import Link from "next/link";
import { Newspaper, HelpCircle, ShieldCheck } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function Recursos() {
  const { recursos } = dadosCliente;

  const renderIcon = (tipo: string) => {
    switch (tipo) {
      case "noticias":
        return (
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/60">
            <Newspaper className="w-8 h-8 text-white stroke-[1.5]" />
          </div>
        );
      case "faq":
        return (
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/60">
            <HelpCircle className="w-8 h-8 text-white stroke-[1.5]" />
          </div>
        );
      case "podcast":
        return (
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/60">
            <ShieldCheck className="w-8 h-8 text-white stroke-[1.5]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="recursos" className="w-full bg-white py-14 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-bold text-[#E67F12] uppercase tracking-widest block mb-1">
            Conhecimento & Legislação
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#596020] tracking-tight">
            {recursos.titulo}
          </h2>
        </div>

        {/* 3 Olive Green Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recursos.cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden bg-[#596020] text-white p-6 sm:p-8 flex flex-col justify-between items-center text-center min-h-[300px] sm:min-h-[340px] shadow-lg rounded-sm group"
            >
              {/* Subtle background image texture */}
              {card.imagemFundo && (
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${card.imagemFundo})` }}
                />
              )}

              {/* Title on Top */}
              <div className="relative z-10 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-white whitespace-pre-line leading-snug">
                  {card.titulo}
                </h3>
              </div>

              {/* Centered Graphic Icon */}
              <div className="relative z-10 my-6">
                {renderIcon(card.tipo)}
              </div>

              {/* Bottom Text Link with Underline */}
              <div className="relative z-10 w-full pt-2 border-t border-white/20">
                <Link
                  href={card.linkUrl}
                  className="text-xs sm:text-sm text-white font-medium underline underline-offset-4 hover:text-amber-200 transition-colors inline-block"
                >
                  {card.linkTexto}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

