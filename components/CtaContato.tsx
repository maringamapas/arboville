import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { dadosCliente } from "@/data/cliente";

export function CtaContato() {
  const { ctaContato, contato, localizacao } = dadosCliente;

  return (
    <section id="contato" className="relative w-full py-16 md:py-24 bg-[#1E2A16] text-white overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ctaContato.imagemFundo})`,
        }}
      >
        <div className="absolute inset-0 bg-[#1E2A16]/50" />
      </div>

      {/* Centered Slate/Olive Box */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 z-10">
        <div className="bg-[#1B2416]/95 backdrop-blur-sm p-6 sm:p-10 md:p-12 text-center shadow-2xl border-t-4 border-[#445922]">
          <span className="text-xs font-bold text-[#E27412] uppercase tracking-widest block mb-2">
            Atendimento Rápido • {localizacao.cidade}/{localizacao.estado}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 whitespace-pre-line">
            {ctaContato.titulo}
          </h2>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-6 whitespace-pre-line">
            {ctaContato.descricao}
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-stone-200 mb-8">
            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded">
              <Phone className="w-3.5 h-3.5 text-[#E27412]" />
              <span>{contato.telefoneFormatado}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded">
              <MapPin className="w-3.5 h-3.5 text-[#E27412]" />
              <span>{localizacao.endereco}, {localizacao.cidade}/{localizacao.estado}</span>
            </div>
          </div>

          <div>
            <Link
              href={ctaContato.botaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E27412] hover:bg-[#C86109] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{ctaContato.botaoTexto}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

