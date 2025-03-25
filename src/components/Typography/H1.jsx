import React from "react";

const H1 = ({ title }) => {
  return (
    <>
      <style>
        {`
          .h1-title {
            font-size: 60px; /* Default font size */
            font-weight: 700;
            line-height: 65px;
          }

          @media (max-width: 1440px) {
            .h1-title {
                font-size: 50px;
                line-height: 60px;
          }
          }

          @media (max-width: 1200px) {
            .h1-title {
            font-size: 40px;
            line-height: 45px;
          }
          }
          @media (max-width: 992px) {
            .h1-title {
            font-size: 36px;
            line-height: 42px;
          }
          }
          @media (max-width: 768px) {
            .h1-title {
            font-size: 30px;
            line-height: 40px;
          }
          }
          @media (max-width: 500px) {
            .h1-title {
            font-size: 20px;
            line-height: 28px;
          }
          }


        `}
      </style>
      <h1 className="h1-title">{title}</h1>
    </>
  );
};

export default H1;
