import { Gift, Heart, Star, Cross } from "lucide-react";

const events = [
  { icon: Cross, label: "Comuniones" },
  { icon: Heart, label: "Bautizos" },
  { icon: Star, label: "Confirmaciones" },
  { icon: Gift, label: "Bodas y otros" },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Para cada celebración
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
          El detalle <span className="italic">perfecto</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-background hover:shadow-warm transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
