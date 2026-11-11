import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../../../context/CartContext";

const QuantitySelector = ({ productId, quantity, onChange }) => {
    const { increaseQuantity, decreaseQuantity } = useCart();

    const handleIncrease = () => {
        if (onChange) {
            onChange(quantity + 1);
        } else {
            increaseQuantity(productId);
        }
    };

    const handleDecrease = () => {
        if (onChange) {
            if (quantity > 1) {
                onChange(quantity - 1);
            }
        } else if (quantity > 0) {
            decreaseQuantity(productId);
        }
    };

    return (
        <div className="flex items-center gap-4 px-3 py-2 rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-primary-light)]/30 w-fit">
            <button
                type="button"
                onClick={handleDecrease}
                disabled={onChange ? quantity <= 1 : quantity === 0}
                className="text-[var(--color-secondary)] hover:opacity-70 disabled:opacity-30 cursor-pointer"
            >
                <FiMinus size={16} />
            </button>

            <span className="text-sm min-w-[20px] text-center">
                {quantity}
            </span>

            <button
                type="button"
                onClick={handleIncrease}
                className="text-[var(--color-secondary)] hover:opacity-70 cursor-pointer"
            >
                <FiPlus size={16} />
            </button>
        </div>
    );
};

export default QuantitySelector;