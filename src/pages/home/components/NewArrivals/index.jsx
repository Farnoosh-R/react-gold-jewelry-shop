import { useEffect, useState } from "react";
import SliderProducts from "../../../../components/shared/sliders/SliderProducts";
import TitleAccent from "../../../../components/shared/TitleAccent";
import { getLatestProducts } from "../../../../services/productService";
import { formatPrice } from "../../../../components/shared/utils/formatPrice";

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const slides = products.map((product) => ({
        id: product.id,
        image:
            product.images?.[0]?.thumbnail ||
            product.images?.[0]?.src,
        title: product.name,
        price: formatPrice(product.prices?.price),
        description: "-",
        buttonText: "خرید",
    }));

    return (
        <section id="new-arrivals">
            <div className="app-container flex flex-col">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="text-[var(--color-secondary)]/40 tracking-[10px]">
                        New Arrivals
                    </div>

                    <h2 className="text-[var(--color-secondary)]">
                        جدیدترین ها
                    </h2>

                    <TitleAccent />

                    <br />

                    {!loading && slides.length > 0 && (
                        <SliderProducts items={slides} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;