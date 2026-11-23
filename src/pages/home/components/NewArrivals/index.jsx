import { useEffect, useState } from "react";
import SliderProducts from "../../../../components/shared/sliders/SliderProducts";
import TitleAccent from "../../../../components/shared/TitleAccent";
import { getLatestProducts } from "../../../../services/productService";
import { calculateProductPrice, formatPrice } from "../../../../components/shared/utils/formatPrice";
import { getGoldPrice } from "../../../../services/goldPriceService";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    getGoldPrice()
      .then((price) => setGoldPrice(price))
      .catch((error) => {
        console.error("GOLD PRICE ERROR:", error);
      });
  }, []);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const data = await getLatestProducts(8);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch latest products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

const slides = products.map((product) => {
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

  return {
    id: product.id,
    image:
      product.images?.[0]?.thumbnail ||
      product.images?.[0]?.src,
    title: product.name,
    price:
      calculatedPrice !== null
        ? formatPrice(calculatedPrice)
        : "قیمت نامشخص",
    description: "-",
    buttonText: "خرید",
  };
});

  return (
    <section id="new-arrivals">
      <div className="app-container flex flex-col">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="text-[var(--color-secondary)]/40 tracking-[10px]">
            New Arrivals
          </div>

          <h2 className="text-[var(--color-secondary)]">جدیدترین ها</h2>

          <TitleAccent />

          <br />

          {!loading && slides.length > 0 && <SliderProducts items={slides} />}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
