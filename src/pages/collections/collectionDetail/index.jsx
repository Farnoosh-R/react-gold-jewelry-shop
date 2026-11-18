import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/productService";
import ProductGrid from "../../../components/product/ProductGrid";

const collectionLabels = {
  eternity: "ابدی",
  clover: "شبدر",
  cartier: "کارتیه",
  classic: "کلاسیک",
  pearl: "مروارید",
  "van-cleef": "ون کلیف",
};

const CollectionDetail = () => {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts({
          collection: slug,
        });

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  return (
    <section className="page min-h-[calc(100vh-200px)]">
      <div className="app-container">
        <div className="flex flex-col items-center mb-15">
          <div class="text-[var(--color-secondary)]/40 tracking-[10px]">
            Zarchic Collection Detail
          </div>
          <h1 className="text-[var(--color-secondary)]">
            {" "}
            کالکشن {collectionLabels[slug] || ""}
          </h1>
        </div>
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-[var(--color-secondary)]/60">
              در حال دریافت محصولات...
            </p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)]">
              در حال حاضر محصولی در این کالکشن موجود نیست.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[var(--text-secondary)] mb-6">
              تعداد محصولات: {products.length}
            </p>

            <ProductGrid products={products} />
          </>
        )}
      </div>
    </section>
  );
};

export default CollectionDetail;
