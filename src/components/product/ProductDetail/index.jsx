import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/productService";
import Button from "../../shared/Button";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

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

  if (loading) {
    return <div>در حال دریافت محصول...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>محصول پیدا نشد.</div>;
  }

  const productInfo = {
    stock: product?.is_in_stock ? "موجود است" : "ناموجود",

    gender: product?.attributes?.find((attr) => attr.taxonomy === "pa_gender")
      ?.terms?.[0]?.name,

    goldKarat: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_gold-karat",
    )?.terms?.[0]?.name,

    goldColor: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_gold-color",
    )?.terms?.[0]?.name,

    style: product?.attributes?.find((attr) => attr.taxonomy === "pa_style")
      ?.terms?.[0]?.name,

    stoneType: product?.attributes?.find(
      (attr) => attr.taxonomy === "pa_stone-type",
    )?.terms?.[0]?.name,

    size: product?.attributes?.find((attr) => attr.taxonomy === "pa_size")
      ?.terms?.[0]?.name,

    weight: product?.weight,
  };

  return (
    <div className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-[var(--color-light)]">{product.name}</h2>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: product.short_description,
              }}
            /> */}
            <div
              className="text-[var(--color-muted)]"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
            <div className="flex gap-1">
              <div>جنسیت:</div>
              <div>{productInfo.gender}</div>
            </div>
            <div className="flex gap-1">
              <div>وضعیت موجودی:</div>
              <div>{productInfo.stock}</div>
            </div>
            <div className="flex gap-1">
              <div>عیار:</div>
              <div>{productInfo.goldKarat}</div>
            </div>
            <div className="flex gap-1">
              <div>رنگ:</div>
              <div>{productInfo.goldColor}</div>
            </div>
            <div className="flex gap-1">
              <div>سبک:</div>
              <div>{productInfo.style}</div>
            </div>
            <div className="flex gap-1">
              <div>نوع نگین:</div>
              <div>{productInfo.stoneType}</div>
            </div>
            <div className="flex gap-1">
              <div>سایز:</div>
              <div>{productInfo.size}</div>
            </div>
            <div className="flex gap-1">
              <div>قیمت:</div>
              <div>{product.prices?.price} تومان</div>
            </div>
            <Button variant="secondary" btnType="gradient">
              افزودن به سبد خرید
            </Button>
          </div>
          <div>
            <div className="img-holder rounded-2xl h-80 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={product.images?.[0]?.src}
                alt={product.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
