import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { calculateProductPrice, formatPrice } from "../../shared/utils/formatPrice";
// import { calculateProductPrice } from "../../utils/priceCalculator";

const ProductCard = ({ product, goldPrice }) => {
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

    console.log("PRODUCT:", product);
console.log("WEIGHT:", product.weight);
console.log("ACF:", product.acf);
console.log("WAGE:", product.acf?.wage);
console.log("GOLD PRICE:", goldPrice);

  return (
    <Link to={`/product/${product.slug}`}>
      <div className="relative h-auto">
        <div className="flex flex-col text-white">
          <div className="relative overflow-hidden rounded-tr-xl rounded-tl-xl h-[200px]">
            <img
              src={product.images?.[0]?.src}
              className="object-cover w-full h-full"
              alt={product.name}
            />
          </div>

          <div className="flex flex-col items-center gap-2 p-5 bg-[var(--color-primary)] rounded-br-xl rounded-bl-xl">
            <div className="text-[var(--color-secondary)] items-center">
              {product.name}
            </div>

            <div className="flex justify-between gap-15">
              <div className="bg-[var(--color-primary-dark)] p-2 rounded-lg">
                <FaShoppingCart color="var(--color-secondary)" />
              </div>

              <div className="flex gap-1">
                <div>
                  {calculatedPrice !== null
                    ? formatPrice(calculatedPrice)
                    : "قیمت نامشخص"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;