import { MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          ¿Te interesa?
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Haz tu <span className="text-gradient-gold">pedido</span>
        </h2>
        <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto">
          Escríbenos para consultar precios, personalizar tus detalles o hacer
          un pedido especial para tu evento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/pedidos_DetallesFe_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-warm-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Escríbenos por Telegram
          </a>
          <a
            href="mailto:caminoSeul2027@gmail.com"
            className="inline-flex items-center gap-3 bg-card text-foreground font-body font-bold px-8 py-4 rounded-lg text-lg hover:bg-muted transition-colors shadow-warm border border-border"
          >
            <Mail className="w-6 h-6" />
            Envíanos un email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
