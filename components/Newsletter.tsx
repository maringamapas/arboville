import Link from "next/link";
import { TreePine, Building2, Leaf } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function Newsletter() {
  const { newsletter } = dadosCliente;

  const renderIcon = (tipo: string) => {
    switch (tipo) {
      case "residencial":
        return (
          <div className="w-20 h-20 rounded-full bg-[#596020] flex items-center justify-center text-white mx-auto shadow-md">
            <TreePine className="w-10 h-10 stroke-[1.5]" />
          </div>
        );
      case "comercial":
        return (
          <div className="w-20 h-20 rounded-full bg-[#596020] flex items-center justify-center text-white mx-auto shadow-md">
            <Building2 className="w-10 h-10 stroke-[1.5]" />
          </div>
        );
      case "ambiental":
        return (
          <div className="w-20 h-20 rounded-full bg-[#596020] flex items-center justify-center text-white mx-auto shadow-md">
            <Leaf className="w-10 h-10 stroke-[1.5]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#F5F4EB] py-14 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E67F12] uppercase tracking-widest block mb-1">
            Segmentos de Atendimento
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#596020] tracking-tight mb-3 whitespace-pre-line">
            {newsletter.titulo}
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A28] whitespace-pre-line">
            {newsletter.subtitulo}
          </p>
        </div>

        {/* 3 Columns for Newsletters with Circular Icons & Orange CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {newsletter.segmentos.map((segmento, idx) => (
            <div
              key={segmento.id}
              className={`flex flex-col items-center text-center px-4 ${
                idx < 2 ? "md:border-r md:border-stone-300" : ""
              }`}
            >
              {/* Circular Green Icon */}
              <div className="mb-4">
                {renderIcon(segmento.tipo)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2B2A28] mb-3 whitespace-pre-line">
                {segmento.titulo}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2B2A28] mb-6 leading-relaxed max-w-xs min-h-[48px] whitespace-pre-line">
                {segmento.descricao}
              </p>

              {/* Orange Action Button */}
              <div className="mt-auto w-full max-w-[240px]">
                <Link
                  href={`https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20para%20o%20segmento%20${encodeURIComponent(segmento.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#E67F12] hover:bg-[#C86109] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-none text-center transition-colors shadow-sm"
                >
                  {segmento.botaoTexto}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

