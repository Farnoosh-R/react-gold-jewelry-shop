import ProductCard from "../ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
