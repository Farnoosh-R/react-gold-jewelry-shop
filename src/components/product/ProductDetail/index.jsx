import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../../services/productService";
import Button from "../../shared/Button";
import {
  FaGem,
  FaBalanceScale,
  FaPalette,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { LuLayers3, LuHeart } from "react-icons/lu";
import QuantitySelector from "../../shared/QuantitySelector";
import { formatPrice } from "../../shared/utils/formatPrice";
import { useCart } from "../../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(product, selectedQuantity);
      alert("محصول با موفقیت به سبد خرید اضافه شد.");
    } catch (error) {
      alert("افزودن محصول به سبد خرید ناموفق بود.");
    }
  };

  const productInfo = {
    stock: product?.is_in_stock ? "موجود" : "ناموجود",

    gender: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_gender",
    )?.terms?.[0]?.name,

    goldKarat: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_gold-karat",
    )?.terms?.[0]?.name,

    goldColor: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_gold-color",
    )?.terms?.[0]?.name,

    style: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_style",
    )?.terms?.[0]?.name,

    stoneType: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_stone-type",
    )?.terms?.[0]?.name,

    size: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_size",
    )?.terms?.[0]?.name,

    collection: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_collection",
    )?.terms?.[0]?.name,

    weight: product?.weight,
  };

  return (
    <div className="page min-h-[calc(100vh-200px)]">
      <div className="app-container py-16">

        {loading ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-lg text-[var(--color-secondary)]/50">
              در حال دریافت محصول...
            </p>
          </div>
        ) : error ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : !product ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p>محصول پیدا نشد.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* اطلاعات محصول */}
            <div className="flex flex-col gap-4">

              <Link
                to={"#"}
                className="flex gap-2 border border-[var(--color-secondary)]/40 rounded-2xl w-fit py-1 px-3 items-center"
              >
                <LuLayers3 color="var(--color-secondary)" />

                <div className="flex gap-2">
                  <div>کالکشن</div>
                  <div>{productInfo.collection || "-"}</div>
                </div>
              </Link>

              <h3 className="text-[var(--color-light)]">
                {product.name}
              </h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: product.short_description,
                }}
              />

              <div className="flex gap-2 items-center text-[var(--color-secondary)]">
                <h3>
                  {formatPrice(product.prices?.price)}
                </h3>
              </div>

              {/* وضعیت موجودی */}
              <div className="flex gap-2 border border-[var(--color-secondary)]/40 rounded-2xl w-fit py-1 px-3 items-center bg-[var(--color-primary-light)]">
                <div
                  className={`w-[8px] h-[8px] ${
                    product.is_in_stock
                      ? "bg-green-500"
                      : "bg-red-500"
                  } rounded-full`}
                ></div>

                <div>{productInfo.stock}</div>
              </div>

              {/* مشخصات محصول */}
              <div className="grid grid-cols-5 py-1 w-[90%] border border-[var(--color-secondary)]/30 rounded-2xl bg-[var(--color-primary-light)]/30">

                <div className="relative flex flex-col gap-2 items-center justify-center px-3 py-3">
                  <FaStar color="var(--color-secondary)" />
                  <div>سبک</div>
                  <div>{productInfo.style || "-"}</div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 border-l border-[var(--color-secondary)]/30" />
                </div>

                <div className="relative flex flex-col gap-2 items-center justify-center px-3 py-3">
                  <FaUser color="var(--color-secondary)" />
                  <div>جنسیت</div>
                  <div>{productInfo.gender || "-"}</div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 border-l border-[var(--color-secondary)]/30" />
                </div>

                <div className="relative flex flex-col gap-2 items-center justify-center px-3 py-3">
                  <FaPalette color="var(--color-secondary)" />
                  <div>رنگ طلا</div>
                  <div>{productInfo.goldColor || "-"}</div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 border-l border-[var(--color-secondary)]/30" />
                </div>

                <div className="relative flex flex-col gap-2 items-center justify-center px-3 py-3">
                  <FaGem color="var(--color-secondary)" />
                  <div>عیار طلا</div>
                  <div>{productInfo.goldKarat || "-"}</div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 border-l border-[var(--color-secondary)]/30" />
                </div>

                <div className="relative flex flex-col gap-2 items-center justify-center px-3 py-3">
                  <FaBalanceScale color="var(--color-secondary)" />
                  <div>وزن</div>
                  <div>{productInfo.weight || "-"}</div>
                </div>

              </div>

              {/* تعداد + افزودن به سبد */}
              <div className="flex gap-3 items-center">
                <QuantitySelector
                  quantity={selectedQuantity}
                  onChange={setSelectedQuantity}
                />

                <Button
                  variant="secondary"
                  btnType="gradient"
                  onClick={handleAddToCart}
                >
                  افزودن به سبد خرید
                </Button>

                <div className="border border-[var(--color-secondary)]/30 rounded-full p-2 w-fit h-fit bg-[var(--color-primary-light)]/30">
                  <LuHeart color="var(--color-secondary)" />
                </div>
              </div>

            </div>

            {/* تصویر محصول */}
            <div>
              <div className="img-holder rounded-2xl h-110 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={product.images?.[0]?.src}
                  alt={product.name}
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
