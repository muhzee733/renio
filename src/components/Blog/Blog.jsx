import React from "react";

const Blog = ({ img, h3, p }) => {
  return (
    <div className="blog-card">
      <img src={img} alt={h3} />
      <div className="blog-content">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default Blog;
