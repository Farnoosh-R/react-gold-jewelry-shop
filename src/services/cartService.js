const API_URL = "https://zarchic.ir/api/wp-json/wc/store/v1";

const CART_TOKEN_KEY = "wooCartToken";

// دریافت سبد خرید ووکامرس
export async function getWooCart() {
  const token = localStorage.getItem(CART_TOKEN_KEY);

  const res = await fetch(`${API_URL}/cart`, {
    headers: token ? { "Cart-Token": token } : {},
  });

  const newToken = res.headers.get("Cart-Token");

  if (newToken) {
    localStorage.setItem(CART_TOKEN_KEY, newToken);
  }

  if (!res.ok) {
    throw new Error(`Get cart failed: ${res.status}`);
  }

  return res.json();
}

// افزودن محصول به سبد خرید ووکامرس
export async function addItemToWooCart(productId, quantity) {
  let token = localStorage.getItem(CART_TOKEN_KEY);

  if (!token) {
    await getWooCart();
    token = localStorage.getItem(CART_TOKEN_KEY);
  }

  const res = await fetch(`${API_URL}/cart/add-item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cart-Token": token,
    },
    body: JSON.stringify({
      id: productId,
      quantity,
    }),
  });

  const newToken = res.headers.get("Cart-Token");

  if (newToken) {
    localStorage.setItem(CART_TOKEN_KEY, newToken);
  }

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `Add item failed: ${res.status}`);
  }

  return res.json();
}
// تغییر تعداد محصول در سبد خرید ووکامرس
export async function updateWooCartItem(itemKey, quantity) {
    const token = localStorage.getItem(CART_TOKEN_KEY);

    const res = await fetch(`${API_URL}/cart/update-item`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cart-Token": token,
        },
        body: JSON.stringify({
            key: itemKey,
            quantity,
        }),
    });

    const newToken = res.headers.get("Cart-Token");

    if (newToken) {
        localStorage.setItem(CART_TOKEN_KEY, newToken);
    }

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Update item failed: ${res.status}`);
    }

    return res.json();
}

// حذف محصول از سبد خرید ووکامرس
export async function removeWooCartItem(itemKey) {
    const token = localStorage.getItem(CART_TOKEN_KEY);

    const res = await fetch(`${API_URL}/cart/remove-item`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cart-Token": token,
        },
        body: JSON.stringify({
            key: itemKey,
        }),
    });

    const newToken = res.headers.get("Cart-Token");

    if (newToken) {
        localStorage.setItem(CART_TOKEN_KEY, newToken);
    }

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Remove item failed: ${res.status}`);
    }

    return res.json();
}