import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import QuantitySelector from "../../components/shared/QuantitySelector";
import { formatPrice } from "../../components/shared/utils/formatPrice";
import { useCart } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  );

  return (
    <section className="app-container min-h-screen pt-32 pb-20">
      <h1 className="text-2xl font-bold text-[var(--color-secondary)] mb-8">
        سبد خرید
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-[var(--color-light)]">سبد خرید شما خالی است.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-5 p-4 border border-[var(--color-secondary)]/20 rounded-xl"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="space-y-2">
                    <h3 className="text-[var(--color-light)] font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[var(--color-secondary)]">
                      قیمت واحد: {formatPrice(item.price)} تومان
                    </p>
                  </div>
                </div>

                {/* Quantity & Total */}
                <div className="flex items-center justify-between gap-6 w-full sm:w-auto">
                  <QuantitySelector
                    productId={item.id}
                    quantity={item.quantity}
                  />

                  <span className="text-[var(--color-secondary)] whitespace-nowrap">
                    {formatPrice(Number(item.price || 0) * item.quantity)} تومان
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 transition cursor-pointer"
                    title="حذف محصول"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border border-[var(--color-secondary)]/20 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-[var(--color-light)] mb-6">
              خلاصه سفارش
            </h2>

            <div className="flex justify-between items-center mb-6">
              <span className="text-[var(--color-light)]">جمع کل</span>

              <span className="text-[var(--color-secondary)] font-bold">
                {formatPrice(totalPrice)} تومان
              </span>
            </div>

            <Button
              variant="secondary"
              btnType="gradient"
              className="w-full py-3 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold hover:opacity-90 transition"
            >
              <Link to={"/checkout"}>ادامه فرایند خرید</Link>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
