import React from "react";

const P = ({ title }) => {
  return (
    <>
      <style>
        {`
          .p-title {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5rem;
          }

          /* Media Queries for responsive font size */
          @media (max-width: 1200px) {
            .p-title {
            font-size: 14px;
          }
          }

        `}
      </style>
      <p className="p-title">{title}</p>
    </>
  );
};

export default P;
