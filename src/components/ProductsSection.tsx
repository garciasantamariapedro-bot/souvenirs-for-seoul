import { useState } from "react";
import { ChevronDown } from "lucide-react";
import productCollares from "@/assets/product-collares.jpg";
import productPulseras from "@/assets/product-pulseras.jpg";
import productLlaveros from "@/assets/product-llaveros.jpg";
import productColgantes from "@/assets/product-colgantes.jpg";

// Pulseras gallery imports
import pulsera1 from "@/assets/pulseras/pulsera-1.jpg";
import pulsera2 from "@/assets/pulseras/pulsera-2.jpg";
import pulsera3 from "@/assets/pulseras/pulsera-3.jpg";
import pulsera4 from "@/assets/pulseras/pulsera-4.jpg";
import pulsera5 from "@/assets/pulseras/pulsera-5.jpg";
import pulsera6 from "@/assets/pulseras/pulsera-6.jpg";
import pulsera7 from "@/assets/pulseras/pulsera-7.jpg";
import pulsera8 from "@/assets/pulseras/pulsera-8.jpg";
import pulsera9 from "@/assets/pulseras/pulsera-9.jpg";
import pulsera10 from "@/assets/pulseras/pulsera-10.jpg";
import pulsera11 from "@/assets/pulseras/pulsera-11.jpg";
import pulsera12 from "@/assets/pulseras/pulsera-12.jpg";
import pulsera13 from "@/assets/pulseras/pulsera-13.jpg";
import pulsera14 from "@/assets/pulseras/pulsera-14.jpg";
import pulsera15 from "@/assets/pulseras/pulsera-15.jpg";
import pulsera16 from "@/assets/pulseras/pulsera-16.jpg";
import pulsera17 from "@/assets/pulseras/pulsera-17.jpg";
import pulsera18 from "@/assets/pulseras/pulsera-18.jpg";
import pulsera19 from "@/assets/pulseras/pulsera-19.jpg";
import pulsera20 from "@/assets/pulseras/pulsera-20.jpg";

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
      { src: pulsera1, label: "Pulseras de hilo trenzado con cruz" },
      { src: pulsera2, label: "Pulseras de nudos colores" },
      { src: pulsera3, label: "Pulseras de nudos variados" },
      { src: pulsera4, label: "Pulseras de cuentas con cruz" },
      { src: pulsera5, label: "Pulsera cordón gris con cruz" },
      { src: pulsera6, label: "Pulsera cordón verde con cruz" },
      { src: pulsera7, label: "Pulsera cordón amarillo con cruz" },
      { src: pulsera8, label: "Pulsera cordón azul con cruz" },
      { src: pulsera9, label: "Pulsera cordón beige con cruz" },
      { src: pulsera10, label: "Pulsera cordón dorado con cruz" },
      { src: pulsera11, label: "Pulsera cordón lila con cruz" },
      { src: pulsera12, label: "Pulsera cordón negro con ángel" },
      { src: pulsera13, label: "Pulsera con medalla Padre Nuestro" },
      { src: pulsera14, label: "Pulseras cordón con medalla Virgen" },
      { src: pulsera15, label: "Pulseras naranja y amarilla Virgen" },
      { src: pulsera16, label: "Pulseras roja y amarilla Virgen" },
      { src: pulsera17, label: "Pulseras hilo con medalla cruz" },
      { src: pulsera18, label: "Pulsera terciopelo verde Virgen" },
      { src: pulsera19, label: "Pulsera terciopelo empaquetada" },
      { src: pulsera20, label: "Pulsera terciopelo azul Virgen" },
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
                ? "max-h-[4000px] opacity-100 mt-10"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                {product.name}
                <span className="block text-sm font-body font-normal text-muted-foreground mt-1">
                  Galería de productos
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
