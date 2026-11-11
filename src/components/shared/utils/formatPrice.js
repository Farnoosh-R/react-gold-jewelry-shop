export const formatPrice = (price) => {
    if (price === null || price === undefined || price === "") {
        return "-";
    }

    // تبدیل ریال به تومان
    const tomanPrice = Number(price) / 10;

    return `${tomanPrice.toLocaleString("en-US")} تومان`;
};