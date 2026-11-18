import { Link } from "react-router-dom";
import {
  GiInfinity,
  GiClover,
  GiRoyalLove,
  GiCrown,
  GiPearlNecklace,
  GiFlowerEmblem,
} from "react-icons/gi";

const Collections = () => {
  const collections = [
    { title: "ابدی", slug: "eternity", icon: GiInfinity },
    { title: "شبدر", slug: "clover", icon: GiFlowerEmblem },
    { title: "کارتیه", slug: "cartier", icon: GiRoyalLove },
    { title: "کلاسیک", slug: "classic", icon: GiCrown },
    { title: "مروارید", slug: "pearl", icon: GiPearlNecklace },
    { title: "ون کلیف", slug: "van-cleef", icon: GiClover },
  ];

  return (
    <section className="page min-h-screen">
      <div className="app-container">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center">
            <div class="text-[var(--color-secondary)]/40 tracking-[10px]">
              Zarchic Collections
            </div>
            <h1 className="text-[var(--color-secondary)]">کالکشن های زرشیک</h1>
          </div>

          <p className="text-[var(--text-secondary)] mt-4">
            دنیایی از طراحی‌های خاص و ماندگار
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {collections.map((collection) => {
            const Icon = collection.icon;
            return (
              <Link
                key={collection.slug}
                to={`/collections/${collection.slug}`}
                className="group flex flex-col items-center gap-3 items-center justify-center min-h-40 rounded-2xl border border-[var(--color-secondary)]/30 p-6 transition-all duration-300 hover:bg-[var(--color-primary)] hover:border-[var(--color-secondary)]"
              >
                <Icon className="text-4xl text-[var(--color-secondary)]" />
                <h2 className="text-lg text-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-110">
                  {collection.title}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
