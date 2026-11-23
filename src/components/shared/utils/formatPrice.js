export const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") {
    return "-";
  }

  // تبدیل ریال به تومان
  const tomanPrice = Number(price) / 10;

  return `${tomanPrice.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })} تومان`;
};

export function calculateProductPrice(weight, goldPrice, wage) {
  const goldValue = Number(weight) * Number(goldPrice);
  const wageValue = goldValue * (Number(wage) / 100);

  return Math.round(goldValue + wageValue);
}