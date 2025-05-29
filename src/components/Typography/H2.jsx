import React from "react";

const H2 = ({ title, isHtml = false }) => {
  return (
    <>
      <style>
        {`
          .h2-title {
            font-size: 40px;
            font-weight: 600;
            line-height: 54px;
            color: white;
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
            @media (max-width: 992px) {
            .h2-title {
              font-size: 32px;
              line-height: 36px;
            }
          }

          @media (max-width: 768px) {
            .h2-title {
              font-size: 26px;
              line-height: 30px;
            }
          }

          @media (max-width: 480px) {
            .h2-title {
              font-size: 28px;
            }
          }
        `}
      </style>
      {isHtml ? (
        <h2 className="h2-title" dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <h2 className="h2-title">{title}</h2>
      )}
    </>
  );
};

export default H2;
