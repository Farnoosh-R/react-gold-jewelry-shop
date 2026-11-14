import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/productService";
import ProductGrid from "../../../components/product/ProductGrid";

const genderMap = {
  women: "womens",
  men: "mens",
  unisex: "unisex",
};

const genderLabels = {
  women: "زنانه",
  men: "مردانه",
  unisex: "یونی‌سکس",
};

const categoryLabels = {
  ring: "انگشتر",
  pendant: "پلاک",
  bracelet: "دستبند",
  chain: "زنجیر",
  sets: "ست",
  necklace: "گردنبند",
  earring: "گوشواره",
};

const ShopCategory = () => {
  const { gender, category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts({
          category,
          gender: genderMap[gender],
        });

        console.log("Gender:", genderMap[gender]);
        console.log("API Products:", data);

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, gender]);

  return (
    <div className="page min-h-[calc(100vh-200px)]">
      <div className="app-container py-16">
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-lg text-[var(--color-secondary)]/50">
              در حال دریافت محصولات...
            </p>
          </div>
        ) : error ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <>
            <h1>
              {categoryLabels[category]} {genderLabels[gender]}
            </h1>

            <p className="mt-4">
              در حال حاضر محصولی در این دسته‌بندی موجود نیست.
            </p>
          </>
        ) : (
          <>
            <h1>
              {categoryLabels[category]} {genderLabels[gender]}
            </h1>

            <p className="mt-4">
              تعداد محصولات: {products.length}
            </p>

            <ProductGrid products={products} />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
