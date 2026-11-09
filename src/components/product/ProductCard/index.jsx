import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
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
            <div className="text-[var(--color-secondary)]">{product.name}</div>

            <div className="flex justify-between gap-25 items-center">
              <div className="bg-[var(--color-primary-dark)] p-2 rounded-lg">
                <FaShoppingCart color="var(--color-secondary)" />
              </div>
              <div>{product.prices?.price} تومان</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
