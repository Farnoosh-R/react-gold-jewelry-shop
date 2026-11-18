import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/productService";
import {
  GiRing,
  GiNecklace,
  GiEarrings,
  GiGemChain,
  GiDiamondRing,
  GiGemPendant,
  GiGems,
} from "react-icons/gi";

const Shop = () => {
  const categories = [
    { slug: "ring", title: "انگشتر", icon: GiRing },
    { slug: "necklace", title: "گردنبند", icon: GiNecklace },
    { slug: "earring", title: "گوشواره", icon: GiEarrings },
    { slug: "bracelet", title: "دستبند", icon: GiDiamondRing },
    { slug: "chain", title: "زنجیر", icon: GiGemChain },
    { slug: "pendant", title: "پلاک", icon: GiGemPendant },
    { slug: "sets", title: "ست و نیم‌ست", icon: GiGems },
  ];

  useEffect(() => {
    getProducts({}).then((data) => {
      console.log("All Products:", data);
      console.log("First Product Attributes:", data[0]?.attributes);
    });
  }, []);

  return (
    <section className="page">
      <div className="app-container">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center">
            <div class="text-[var(--color-secondary)]/40 tracking-[10px]">
              Zarchic Shop
            </div>
            <h1 className="text-[var(--color-secondary)]">فروشگاه زرشیک</h1>
          </div>

          <p className="text-[var(--text-secondary)] mt-4">
            دسته‌بندی موردنظر خود را انتخاب کنید
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                to={`/shop/women/${category.slug}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--color-secondary)]/20 p-8 text-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                <Icon className="text-4xl text-[var(--color-secondary)]" />
                <h2>{category.title}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
