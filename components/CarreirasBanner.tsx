import Link from "next/link";
import { dadosCliente } from "@/data/cliente";

export function CarreirasBanner() {
  const { carreirasBanner } = dadosCliente;

  return (
    <section id="carreiras" className="relative w-full py-16 md:py-24 bg-[#596020] text-white overflow-hidden">
      {/* Background with dark overlay matching brand style */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${carreirasBanner.imagemFundo})`,
        }}
      >
        <div className="absolute inset-0 bg-[#596020]/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 whitespace-pre-line">
          {carreirasBanner.titulo}
        </h2>

        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl mx-auto mb-6 whitespace-pre-line">
          {carreirasBanner.paragrafo1}
        </p>

        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl mx-auto mb-8 whitespace-pre-line">
          {carreirasBanner.paragrafo2}
        </p>

        <div>
          <Link
            href={carreirasBanner.botaoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E67F12] hover:bg-[#B9650E] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-colors shadow-md"
          >
            {carreirasBanner.botaoTexto}
          </Link>
        </div>
      </div>
    </section>
  );
}

