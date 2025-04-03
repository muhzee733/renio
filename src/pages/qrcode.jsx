import Meta from "@/components/Meta";
import H2 from "@/components/Typography/H2";
import P from "@/components/Typography/P";
import React from "react";

const QrCode = () => {
  return (
    <>
      <Meta title="QR Code" />
      <div className="qr-code vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <H2 title="Explore " />
          <H2 title="the Renie Nexus" />
          <figure className="d-flex justify-content-center m-2">
            <img src="/assets/qr-code.png" />
          </figure>
          <P title="For the best experience, scan the QR code using your mobile device." />
        </div>
      </div>
    </>
  );
};

export default QrCode;
