const API_URL = "https://zarchic.ir/api/wp-json/wc/store/v1";

export async function getProducts({ category, gender }) {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  if (gender) {
    params.append("attributes[0][attribute]", "pa_gender");
    params.append("attributes[0][slug]", gender);
  }

  const url = `${API_URL}/products?${params.toString()}`;

  console.log("Products API:", url);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}
export async function getLatestProducts(limit = 8) {
    const params = new URLSearchParams();

    params.append("orderby", "date");
    params.append("order", "desc");
    params.append("per_page", limit);

    const url = `${API_URL}/products?${params.toString()}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    return res.json();
}
