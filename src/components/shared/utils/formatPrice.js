export const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") {
    return "-";
  }

  return `${Number(price).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })} تومان`;
};

export const formatTomanPrice = (price) => {
  if (price === null || price === undefined || price === "") {
    return "-";
  }

  return `${Number(price).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })} تومان`;
};

export function calculateProductPrice(weight, goldPrice, wage) {
  const goldValue = Number(weight) * Number(goldPrice);
  const wageValue = goldValue * (Number(wage) / 100);

  return Math.round(goldValue + wageValue);
}