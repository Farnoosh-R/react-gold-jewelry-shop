import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTelegramPlane, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineTag, HiOutlineUser } from "react-icons/hi";
import Button from "../../../components/shared/Button";
import { getPostBySlug } from "../../../services/blogService";
import RelatedProducts from "../../../components/blog/RelatedProducts";

const BlogDetail = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   getPostBySlug(slug).then((data) => {
  //     setPost(data[0]);
  //   });
  // }, [slug]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getPostBySlug(slug);
        setPost(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const toJalali = (date) => {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };


  return (
    <div id="blog-detail" className="page">
      <div className="app-container">
        {loading ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-lg text-[var(--color-secondary)]/50">
              در حال دریافت مقاله...
            </p>
          </div>
        ) : error ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : !post ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <p>مقاله پیدا نشد.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-[var(--color-muted)]/20 pb-7 mb-5">
              <div className="flex flex-col gap-3">
                <h1 className="mb-4 text-3xl lg:text-5xl">
                  {post.title.rendered}
                </h1>

                <div className="flex gap-1">
                  <HiOutlineCalendar color="var(--color-secondary)" />

                  <div className="text-[var(--color-muted)]">
                    {toJalali(post.date)}
                  </div>
                </div>

                <div className="flex gap-1">
                  <HiOutlineTag color="var(--color-secondary)" />

                  <div className="text-[var(--color-muted)]">دسته بندی:</div>

                  <div className="text-[var(--color-muted)]">
                    {post.categories}
                  </div>

                  <div className=" mx-2">|</div>

                  <HiOutlineUser color="var(--color-secondary)" />

                  <div className="text-[var(--color-muted)]">نویسنده:</div>

                  <div className="text-[var(--color-muted)]">{post.author}</div>
                </div>

                <div
                  className="text-lg leading-11 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <div className="flex items-center gap-5 mt-5">
                  <Button to={"/blog"} variant="secondary" btnType="outline">
                    مشاهده همه مقالات
                  </Button>

                  <div className="flex gap-3 text-[var(--color-primary-muted)]">
                    <a href="#">
                      <FaTelegramPlane />
                    </a>

                    <a href="#">
                      <FaLinkedinIn />
                    </a>

                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              <div className="" >
                {image && (
                  <div className="overflow-hidden mx-auto rounded-3xl shadow-brand h-[400px]">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
              className="leading-12 rounded-3xl bg-[var(--color-primary)] p-7"
            />

            <RelatedProducts
              categories={post?.acf?.related_product_categories || []}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
