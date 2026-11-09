import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/productService";
import ProductGrid from "../../../components/product/ProductGrid";

const genderMap = {
  women: "womens",
  men: "mens",
  unisex: "unisex",
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

  if (loading) {
    return <div>در حال دریافت محصولات...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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

  if (products.length === 0) {
    return (
      <div className="page">
        <div className="app-container">
          <h1>
            {categoryLabels[category]} {genderLabels[gender]}
          </h1>

          <p>در حال حاضر محصولی در این دسته‌بندی موجود نیست.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="app-container">
        <h1>
          {categoryLabels[category]} {genderLabels[gender]}
        </h1>

        <p>تعداد محصولات: {products.length}</p>

        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ShopCategory;
