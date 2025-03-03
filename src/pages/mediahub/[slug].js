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
    return <h1 className="text-center text-xl">Blog Not Found</h1>;
  }

  return (
    <>
    <Head>
      <title>{blog.title}</title>
    </Head>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Banner Section */}
        <div className="blog-banner">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="mt-2 text-gray-300">{blog.date}</p>
        </div>

        {/* Blog Layout */}
        <div className="Media-Hub-detail mt-6 space-y-6">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2 key={index} className="text-2xl font-semibold">
                    {block.text}
                  </h2>
                );
              case "text":
                return (
                  <p key={index} className="text-lg text-gray-700">
                    {block.text}
                  </p>
                );
              case "image":
                return (
                  <div key={index} className="mt-6">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1000}
                      height={400}
                      className="rounded-lg w-full"
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
