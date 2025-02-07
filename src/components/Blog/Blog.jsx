import React from "react";

const Blog = ({img, h3, p}) => {
  return (
    <div>
      <img src={img} />
      <h3>{h3}</h3>
      <p>
        {p}
      </p>
    </div>
  );
};

export default Blog;
