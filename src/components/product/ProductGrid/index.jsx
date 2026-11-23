import ProductCard from "../ProductCard";

const ProductGrid = ({ products, goldPrice }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            goldPrice={goldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;