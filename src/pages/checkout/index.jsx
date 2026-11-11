import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../components/shared/utils/formatPrice";
import Button from "../../components/shared/Button";

const Checkout = () => {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    city: "",
    address: "",
    postcode: "",
  });
  const [errors, setErrors] = useState({});
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Customer Info:", formData);
    console.log("Cart Items:", cartItems);
  };

  if (cartItems.length === 0) {
    return (
      <section className="app-container min-h-screen pt-32 pb-20">
        <h1 className="text-2xl text-white mb-4">سبد خرید شما خالی است.</h1>
      </section>
    );
  }

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "وارد کردن نام الزامی است.";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "وارد کردن نام خانوادگی الزامی است.";
    }

    if (!/^09\d{9}$/.test(formData.phone)) {
      errors.phone = "شماره موبایل باید ۱۱ رقم و با 09 شروع شود.";
    }

    if (!formData.province.trim()) {
      errors.province = "وارد کردن استان الزامی است.";
    }

    if (!formData.city.trim()) {
      errors.city = "وارد کردن شهر الزامی است.";
    }

    if (!formData.address.trim()) {
      errors.address = "وارد کردن آدرس الزامی است.";
    }

    if (!/^\d{10}$/.test(formData.postcode)) {
      errors.postcode = "کد پستی باید دقیقاً ۱۰ رقم باشد.";
    }

    return errors;
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--color-secondary)]/30 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--color-secondary)]";

  return (
    <section className="app-container min-h-screen pt-32 pb-20">
      <h1 className="text-3xl text-white mb-10">تسویه حساب</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Customer Information */}

        <div className="lg:col-span-2 space-y-8">
          {/* Customer Information */}
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-[var(--color-secondary)] mb-6">
              اطلاعات مشتری
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div>
                <label className="block text-white mb-2">نام</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white mb-2">نام خانوادگی</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-400 text-xs mt-2">{errors.lastName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white mb-2">شماره موبایل</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="09123456789"
                  maxLength={11}
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-2">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-[var(--color-secondary)] mb-6">
              اطلاعات ارسال
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Province */}
              <div>
                <label className="block text-white mb-2">استان</label>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                {errors.province && (
                  <p className="text-red-400 text-xs mt-2">{errors.province}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-white mb-2">شهر</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                {errors.city && (
                  <p className="text-red-400 text-xs mt-2">{errors.city}</p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-white mb-2">آدرس کامل</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                  required
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-2">{errors.address}</p>
                )}
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-white mb-2">کد پستی</label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="1234567890"
                  maxLength={10}
                  required
                />
                {errors.postcode && (
                  <p className="text-red-400 text-xs mt-2">{errors.postcode}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col gap-3 h-fit rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-[var(--color-secondary)]">خلاصه سفارش</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span className="text-white">
                  {item.name} × {item.quantity}
                </span>

                <span className="text-gray-300 whitespace-nowrap">
                  {formatPrice(Number(item.price || 0) * item.quantity)} تومان
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex justify-between">
            <span className="text-white">جمع کل</span>

            <span className="text-[var(--color-secondary)] font-bold">
              {formatPrice(totalPrice)} تومان
            </span>
          </div>

          <Button
            variant="secondary"
            btnType="gradient"
            type="submit"
            className="w-full mt-6 rounded-full py-3 bg-[var(--gradient-secondary)] text-white font-semibold hover:opacity-90 transition"
          >
            ثبت اطلاعات و ادامه
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
