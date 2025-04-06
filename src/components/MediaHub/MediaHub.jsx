import Link from "next/link";
import Image from "next/image";
import blogData from "@/pages/blogData.json";
import Head from "next/head";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const MediaHub = () => {
  return (
    <>
      <Head>
        <title>Renie Media Hub</title>
      </Head>

      <div className="container mt-5 bg-white">
        <div className="row">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <Link href={`/mediahub/${blog.slug}`}>
                  <Image
                    className="card-img-top"
                    src={blog.featured}
                    alt={blog.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  <Link href={`/mediahub/${blog.slug}`}>
                    <h5 className="card-title text-dark">
                      {truncateText(blog.title, 40)}
                    </h5>
                  </Link>

                  <p className="card-text text-muted">
                    {truncateText(blog.small_desc, 100)}
                  </p>

                  <Link
                    href={`/mediahub/${blog.slug}`}
                    className="mt-auto text-primary text-decoration-none"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaHub;
