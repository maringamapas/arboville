import Image from "next/image";
import Link from "next/link";
import { dadosCliente } from "@/data/cliente";

export function Historia() {
  const { historia } = dadosCliente;

  return (
    <section id="sobre" className="w-full bg-white py-12 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col space-y-6">
            <span className="text-xs font-bold text-[#E67F12] uppercase tracking-widest">
              Sobre a {dadosCliente.nome}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#596020] leading-tight whitespace-pre-line">
              {historia.titulo}
            </h2>

            {historia.destaque && (
              <p className="text-xs sm:text-sm font-semibold text-[#1F2937] uppercase tracking-wide">
                {historia.destaque}
              </p>
            )}

            <p className="text-xs sm:text-sm text-[#2B2A28] leading-relaxed whitespace-pre-line">
              {historia.paragrafo1}
            </p>

            {historia.paragrafo2 && (
              <p className="text-xs sm:text-sm text-[#2B2A28] leading-relaxed whitespace-pre-line">
                {historia.paragrafo2}
              </p>
            )}

            <div className="pt-2">
              <Link
                href={historia.botaoLink}
                className="inline-block bg-[#E67F12] hover:bg-[#C86109] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none transition-colors shadow-sm"
              >
                {historia.botaoTexto}
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative w-full aspect-square max-w-[540px] mx-auto lg:max-w-none shadow-lg rounded-sm overflow-hidden bg-stone-100 border border-stone-200">
            <Image
              src={historia.imagemUrl}
              alt={historia.imagemAlt}
              fill
              className="object-contain sm:object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

