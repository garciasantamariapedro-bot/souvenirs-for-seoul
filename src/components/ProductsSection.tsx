import productCollares from "@/assets/product-collares.jpg";
import productPulseras from "@/assets/product-pulseras.jpg";
import productLlaveros from "@/assets/product-llaveros.jpg";
import productColgantes from "@/assets/product-colgantes.jpg";

const products = [
  {
    name: "Collares",
    description: "Cruces, medallas y símbolos de fe en delicados collares artesanales.",
    image: productCollares,
  },
  {
    name: "Pulseras",
    description: "Pulseras de rosario y cuentas con detalles religiosos llenos de significado.",
    image: productPulseras,
  },
  {
    name: "Llaveros",
    description: "Llaveros con medallas y cruces, un recordatorio diario de fe.",
    image: productLlaveros,
  },
  {
    name: "Colgantes",
    description: "Ángeles, santos y símbolos sagrados en pequeños colgantes únicos.",
    image: productColgantes,
  },
];

const ProductsSection = () => {
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
            <div
              key={product.name}
              className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
