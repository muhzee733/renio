import React from "react";

const H2 = ({ title }) => {
  return (
    <>
      <style>
        {`
          .h2-title {
            font-size: 40px;
            font-weight: 600;
            line-height: 54px;
          }

          @media (max-width: 1440px) {
            .h2-title {
                font-size: 34px;
                line-height: 40px;
          }
          }

          @media (max-width: 1200px) {
            .h2-title {
              font-size: 50px;
            }
          }

          @media (max-width: 768px) {
            .h2-title {
              font-size: 26px;
              line-height: 30px
            }
          }

          @media (max-width: 480px) {
            .h2-title {
              font-size: 32px;
            }
          }

          
        `}
      </style>
      <h2 className="h2-title">{title}</h2>
    </>
  );
};

export default H2;
