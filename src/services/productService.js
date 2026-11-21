const API_URL = "https://zarchic.ir/api/wp-json/wc/store/v1";

export async function getProducts({ category, gender, collection }) {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  let attributeIndex = 0;

  if (gender) {
    params.append(`attributes[${attributeIndex}][attribute]`, "pa_gender");
    params.append(`attributes[${attributeIndex}][slug]`, gender);

    attributeIndex++;
  }

  if (collection) {
    params.append(`attributes[${attributeIndex}][attribute]`, "pa_collection");
    params.append(`attributes[${attributeIndex}][slug]`, collection);
  }

  const url = `${API_URL}/products?${params.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

// export async function getProductById(id) {
//   const res = await fetch(`${API_URL}/products/${id}`);

//   if (!res.ok) {
//     throw new Error(`Request failed: ${res.status}`);
//   }

//   return res.json();
// }

/*********felan az in method estefade nemishe********/
export async function getProductById(id) {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const product = await res.json();

  const wpRes = await fetch(
    `https://zarchic.ir/api/wp-json/wp/v2/product/${id}`,
  );

  if (!wpRes.ok) {
    throw new Error(`WP Request failed: ${wpRes.status}`);
  }

  const wpProduct = await wpRes.json();

  return {
    ...product,
    acf: wpProduct.acf,
  };
}
/************************************************/

// export async function getProductBySlug(slug) {
//   const res = await fetch(
//     `${API_URL}/products?slug=${encodeURIComponent(slug)}`
//   );

//   if (!res.ok) {
//     throw new Error(`Request failed: ${res.status}`);
//   }

//   const products = await res.json();

//   if (!products.length) {
//     throw new Error("Product not found");
//   }

//   const product = products[0];

//   const wpRes = await fetch(
//     `https://zarchic.ir/api/wp-json/wp/v2/product/${product.id}`
//   );

//   if (!wpRes.ok) {
//     throw new Error(`WP Request failed: ${wpRes.status}`);
//   }

//   const wpProduct = await wpRes.json();

//   return {
//     ...product,
//     acf: wpProduct.acf,
//   };
// }

export async function getProductBySlug(slug) {
  const url = `${API_URL}/products/${encodeURIComponent(slug)}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const product = await res.json();

  const wpRes = await fetch(
    `https://zarchic.ir/api/wp-json/wp/v2/product/${product.id}`
  );

  if (!wpRes.ok) {
    throw new Error(`WP Request failed: ${wpRes.status}`);
  }

  const wpProduct = await wpRes.json();

  return {
    ...product,
    acf: wpProduct.acf,
  };
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
