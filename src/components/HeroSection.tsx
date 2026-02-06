import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Detalles religiosos artesanales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Detalles con fe y amor
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Regalos que <span className="italic text-gold-glow">inspiran</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto leading-relaxed">
          Collares, pulseras, llaveros y colgantes religiosos perfectos para
          comuniones, bautizos y celebraciones especiales.
        </p>
        <a
          href="#productos"
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg tracking-wide hover:opacity-90 transition-opacity shadow-warm-lg"
        >
          Ver Productos
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
