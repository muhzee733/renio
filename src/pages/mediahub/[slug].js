import { useRouter } from "next/router";
import blogData from "@/pages/blogData.json";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Head from "next/head";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog based on the slug
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center mt-5">
        <h1 className="h4 text-danger">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>

      <Navbar />
      <div className="blog-banner">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="mt-2 text-gray-300 text-white">{blog.date}</p>
        </div>

      <div className="container-xl mt-5">

        <div className="mb-5">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2 key={index} className="h4 fw-semibold mb-3">
                    {block.text}
                  </h2>
                );
              case "text":
                return (
                  <p key={index} className="text-secondary fs-5 mb-4 blog-text">
                    {block.text}
                  </p>
                );
              case "image":
                return (
                  <div key={index} className="my-4">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1000}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>

      <Footer />
      <MiniFooter />
    </>
  );
}
