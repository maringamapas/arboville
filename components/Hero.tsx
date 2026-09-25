import Link from "next/link";
import { dadosCliente } from "@/data/cliente";

export function Hero() {
  const { hero } = dadosCliente;

  return (
    <section className="relative w-full min-h-[calc(100svh-88px)] lg:min-h-[calc(100svh-188px)] bg-[#1E2A16] overflow-hidden flex items-center">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top_30%] bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${hero.imagemFundo})`,
        }}
      >
        {/* Subtle dark gradient overlay for optimal reading and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/50 sm:bg-black/25" />
      </div>

      {/* Subtle brand geometric accent in corner */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#445922]/20 rounded-bl-full pointer-events-none" />

      {/* Floating Card Content centered */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 flex justify-center items-center">
        <div className="w-full md:max-w-2xl lg:max-w-3xl bg-[#131d0e]/25 hover:bg-[#131d0e]/30 backdrop-blur-xl backdrop-saturate-150 text-white p-6 sm:p-10 md:p-12 lg:p-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-white/20 border-t-4 border-t-[#5d7c2e] transition-all duration-300 text-center flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FFA726] uppercase mb-2 sm:mb-3 block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {dadosCliente.nome} • {dadosCliente.localizacao.cidade}/{dadosCliente.localizacao.estado}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight sm:leading-snug whitespace-pre-line mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
            {hero.titulo}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-stone-100 font-medium leading-relaxed mb-6 sm:mb-8 whitespace-pre-line max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            {hero.subtitulo}
          </p>
          <div className="flex justify-center">
            <Link
              href={hero.botaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E27412] hover:bg-[#C86109] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-none transition-colors shadow-lg hover:shadow-xl drop-shadow-md"
            >
              {hero.botaoTexto}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


