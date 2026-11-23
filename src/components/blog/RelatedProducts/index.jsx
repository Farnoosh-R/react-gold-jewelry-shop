import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { calculateProductPrice, formatPrice } from "../../shared/utils/formatPrice";
import { getProducts } from "../../../services/productService";
import { getGoldPrice } from "../../../services/goldPriceService";

const RelatedProducts = ({ categories = [] }) => {
  const [products, setProducts] = useState([]);
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    getGoldPrice()
      .then((price) => setGoldPrice(price))
      .catch((error) => {
        console.error("GOLD PRICE ERROR:", error);
      });
  }, []);

  useEffect(() => {
    if (!categories.length) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map((category) => getProducts({ category })),
        );

        const allProducts = results.flat();

        // حذف محصولات تکراری
        const uniqueProducts = [
          ...new Map(
            allProducts.map((product) => [product.id, product]),
          ).values(),
        ];

        setProducts(uniqueProducts.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch related products:", error);
      }
    };

    fetchProducts();
  }, [categories]);

  if (!products.length) return null;

  return (
    <section className="mt-16 border-t border-[var(--brand-muted)] pt-10">
      <div className="flex flex-col items-center mb-8">
        <span className="text-[var(--color-secondary)]/60 tracking-[6px] text-sm">
          ZARCHIC
        </span>

        <h2 className="text-[var(--color-secondary)] mt-2">محصولات پیشنهادی</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const image =
            product.images?.[0]?.thumbnail || product.images?.[0]?.src;

          const weight = Number(product.weight);
          const wage = Number(product.acf?.wage);

          const canCalculate =
            goldPrice !== null &&
            Number.isFinite(weight) &&
            weight > 0 &&
            product.acf?.wage !== null &&
            product.acf?.wage !== undefined &&
            product.acf?.wage !== "" &&
            Number.isFinite(wage);

          const calculatedPrice = canCalculate
            ? calculateProductPrice(weight, goldPrice, wage)
            : null;

          return (
            <Link
              key={product.id}
              // to={`/product/${product.id}`}
              to={`/product/${product.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl bg-[var(--color-primary)]">
                {image && (
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-5 text-center">
                  <h3 className="text-[var(--color-secondary)] text-lg">
                    {product.name}
                  </h3>

                  <div className="mt-3 text-[var(--text-secondary)]">
                    {calculatedPrice !== null
                      ? formatPrice(calculatedPrice)
                      : "قیمت نامشخص"}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
