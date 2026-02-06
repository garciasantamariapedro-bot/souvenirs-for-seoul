const MissionSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-10 md:p-16 shadow-warm-lg text-center relative overflow-hidden">
          {/* Decorative cross */}
          <div className="absolute top-6 right-8 text-6xl font-display text-primary/10 select-none">
            ✝
          </div>

          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Nuestra misión
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Camino al encuentro con el{" "}
            <span className="text-gradient-gold">Papa en Seúl 2027</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Cada compra que realizas nos acerca más a nuestro sueño: asistir al
            encuentro con el Santo Padre en Seúl, Corea del Sur, en 2027. Tu
            apoyo no solo es un regalo para tus seres queridos, sino también una
            contribución a esta peregrinación de fe.
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3">
            <span className="font-body text-sm font-bold text-secondary-foreground">
              🇰🇷 Seúl 2027 — Encuentro con el Papa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
