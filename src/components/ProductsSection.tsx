import { useState } from "react";
import { ChevronDown } from "lucide-react";
import productCollares from "@/assets/product-collares.jpg";
import productPulseras from "@/assets/product-pulseras.jpg";
import productLlaveros from "@/assets/product-llaveros.jpg";
import productColgantes from "@/assets/product-colgantes.jpg";

const products = [
  {
    name: "Collares",
    description: "Cruces, medallas y símbolos de fe en delicados collares artesanales.",
    image: productCollares,
    gallery: [
      { src: productCollares, label: "Collar con cruz dorada" },
      { src: productCollares, label: "Collar medalla Virgen" },
      { src: productCollares, label: "Collar rosario perlas" },
      { src: productCollares, label: "Collar San Benito" },
      { src: productCollares, label: "Collar cruz plateada" },
      { src: productCollares, label: "Collar ángel guardián" },
    ],
  },
  {
    name: "Pulseras",
    description: "Pulseras de rosario y cuentas con detalles religiosos llenos de significado.",
    image: productPulseras,
    gallery: [
      { src: productPulseras, label: "Pulsera rosario azul" },
      { src: productPulseras, label: "Pulsera cuentas madera" },
      { src: productPulseras, label: "Pulsera cruz trenzada" },
      { src: productPulseras, label: "Pulsera medalla milagrosa" },
      { src: productPulseras, label: "Pulsera perlas blancas" },
      { src: productPulseras, label: "Pulsera San Judas" },
    ],
  },
  {
    name: "Llaveros",
    description: "Llaveros con medallas y cruces, un recordatorio diario de fe.",
    image: productLlaveros,
    gallery: [
      { src: productLlaveros, label: "Llavero cruz madera" },
      { src: productLlaveros, label: "Llavero ángel resina" },
      { src: productLlaveros, label: "Llavero medalla San Cristóbal" },
      { src: productLlaveros, label: "Llavero rosario mini" },
      { src: productLlaveros, label: "Llavero Virgen del Carmen" },
      { src: productLlaveros, label: "Llavero cruz metal" },
    ],
  },
  {
    name: "Colgantes",
    description: "Ángeles, santos y símbolos sagrados en pequeños colgantes únicos.",
    image: productColgantes,
    gallery: [
      { src: productColgantes, label: "Colgante ángel dorado" },
      { src: productColgantes, label: "Colgante Sagrado Corazón" },
      { src: productColgantes, label: "Colgante cruz cristal" },
      { src: productColgantes, label: "Colgante Virgen María" },
      { src: productColgantes, label: "Colgante paloma espíritu" },
      { src: productColgantes, label: "Colgante mano de Fátima" },
    ],
  },
];

const ProductsSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <section id="productos" className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Nuestra colección
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Detalles con <span className="text-gradient-gold">significado</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Cada pieza está pensada para ser un regalo especial en los momentos
            más importantes de la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col">
              <button
                onClick={() => toggleExpand(product.name)}
                className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 text-left w-full"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      expanded === product.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded gallery */}
        {products.map((product) => (
          <div
            key={`gallery-${product.name}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded === product.name
                ? "max-h-[2000px] opacity-100 mt-10"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                {product.name}
                <span className="block text-sm font-body font-normal text-muted-foreground mt-1">
                  Pulsa en cualquier imagen para ver más detalles
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group/item rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-warm transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-body text-sm text-foreground text-center">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
