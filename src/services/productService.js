const API_URL = "https://zarchic.ir/api/wp-json/wc/store/v1";


export async function getProducts({ category, gender, collection }) {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  let attributeIndex = 0;

  if (gender) {
    params.append(
      `attributes[${attributeIndex}][attribute]`,
      "pa_gender"
    );
    params.append(
      `attributes[${attributeIndex}][slug]`,
      gender
    );

    attributeIndex++;
  }

  if (collection) {
    params.append(
      `attributes[${attributeIndex}][attribute]`,
      "pa_collection"
    );
    params.append(
      `attributes[${attributeIndex}][slug]`,
      collection
    );
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
