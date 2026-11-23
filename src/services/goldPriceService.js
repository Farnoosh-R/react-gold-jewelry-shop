
const GOLD_API_URL =
  "https://zarchic.ir/api/wp-json/zarchic/v1/gold-price";

export async function getGoldPrice() {
  const res = await fetch(GOLD_API_URL);

  if (!res.ok) {
    throw new Error(`Gold price request failed: ${res.status}`);
  }

  const data = await res.json();

  if (typeof data.price !== "number") {
    throw new Error("Invalid gold price received");
  }

  // تبدیل ریال به تومان
  return data.price / 10;
}
