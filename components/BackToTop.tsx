"use client";

import { ChevronUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="absolute right-4 bottom-4 w-9 h-9 bg-[#E67F12] hover:bg-[#B9650E] text-white rounded-t flex items-center justify-center transition-colors shadow-lg"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
