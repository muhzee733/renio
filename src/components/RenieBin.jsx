import React from "react";
import Blog from "./Blog/Blog";

const RenieBin = () => {
  return (
    <div className="renie-bin">
     <div class="container">
     <div className="renie-bin-wrapper">
        <h2>Renie Bins are Everywhere</h2>
        <p>Transforming Waste for Every Space</p>
        <div className="blogs">
         <Blog img='/assets/blog-1.png' h3="Governments & Municipalities" p="Renie transforms offices and residential communities with tailored
        recycling solutions."/>
        <Blog img='/assets/blog-2.png' h3="Governments & Municipalities" p="Renie transforms offices and residential communities with tailored
        recycling solutions."/>
        <Blog img='/assets/blog-3.png' h3="Governments & Municipalities" p="Renie transforms offices and residential communities with tailored
        recycling solutions."/>
        <Blog img='/assets/blog-4.png' h3="Governments & Municipalities" p="Renie transforms offices and residential communities with tailored
        recycling solutions."/>
        </div>
      </div>
     </div>
    </div>
  );
};

export default RenieBin;
