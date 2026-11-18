const API_URL = "https://zarchic.ir/api/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(
    `${API_URL}/posts?_embed&per_page=10`
  );

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`
  );

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}