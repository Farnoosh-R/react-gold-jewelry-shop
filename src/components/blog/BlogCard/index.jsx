import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  console.log(post.slug);

  return (
    <div className="rounded-[30px] w-[314px] overflow-hidden shadow-brand mb-20 p-2 bg-[var(--color-primary)]">
      {image && (
        <div className="h-[200px] overflow-hidden">
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full h-[458px] object-cover rounded-[30px]"
          />
        </div>
      )}

      <div className="flex flex-col p-4 text-[var(--text-secondary)]">
        <Link to={`/blog/${post.slug}`} className="text-[var(--color-secondary)]">
          <h5 className="truncate">{post.title.rendered}</h5>
        </Link>

        <div
          className="mt-3 leading-7 truncate"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </div>
    </div>
  );
};

export default BlogCard;