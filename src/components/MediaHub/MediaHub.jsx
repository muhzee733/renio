import Link from "next/link";
import Image from "next/image";
import blogData from "@/pages/blogData.json";
import Head from "next/head";

const MediaHub = () => {
  return (
    <>
      <Head>
        <title>Renie Media Hub</title>
      </Head>

      <div className="container-xl mt-5 bg-white">
        {/* Blog Grid Layout */}
        <div className="Media-Hub grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className=" w-full bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              {/* Featured Image */}
              <Link href={`/mediahub/${blog.slug}`}>
                <Image
                  className="rounded-t-lg object-cover w-full h-48"
                  src={blog.featured}
                  alt={blog.title}
                  width={400}
                  height={300}
                />
              </Link>

              <div className="p-6 blog-data">
                {/* Blog Title */}
                <Link href={`/mediahub/${blog.slug}`}>
                  <h2 className="font-semibold text-gray-800">
                    {blog.title}
                  </h2>
                </Link>

                {/* Blog Small Description with 3-line truncation */}
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {blog.small_desc}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/mediahub/${blog.slug}`}
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaHub;
