import React from "react";

const H4 = ({title}) => {
  return (
    <>
      <style>
        {`
          .h4-title {
              font-size: 24px;
              font-weight: 600;
          }

          @media (max-width: 1200px) {
            .h4-title {
              font-size: 20px;
            }
          }
          @media (max-width: 992px) {
            .h4-title {
              font-size: 16px;
            }
          }
          @media (max-width: 768px) {
            .h4-title {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .h4-title {
              font-size: 13px;
            }
          }
        `}
      </style>
      <h4 className="h4-title">{title}</h4>
    </>
  );
};

export default H4;
