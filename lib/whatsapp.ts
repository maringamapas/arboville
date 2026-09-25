export function formatarWhatsapp(numero: string, mensagem?: string): string {
  const limpo = numero.replace(/\D/g, "");
  const base = `https://wa.me/${limpo}`;
  if (mensagem) {
    return `${base}?text=${encodeURIComponent(mensagem)}`;
  }
  return base;
}
