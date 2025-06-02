import Image from "next/image";
import H1 from "../Typography/H1";
import P from "../Typography/P";

function SixthSection() {
  return (
    <>
      <div className="when-you-get">
        <div className="container-xl">
          <div class="row">
            <div class="col-sm-12 text-center when-get-top">
              <H1 title={"what you get"} />
              <P title={"A complete business toolkit"} />
            </div>
          </div>
          <div className="row align-items-center py-4"
            style={{ backgroundColor: "rgba(210, 221, 255, 1)" }}
          >
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <Image
                src="/assets/renie-update/group-1.png"
                width={200}
                height={180}
                alt="Renie Hardware"
              />
            </div>
            <div className="col-md-4 ">
              <h5 className="text-uppercase fw-bold ">
                Renie Hardware
              </h5>
              <ul className="text-dark">
                <li>Smart Bins (150/300/500 units)</li>
                <li>Built-in sensors & IoT connectivity</li>
                <li>Plug-and-play installation</li>
              </ul>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <Image
                src="/assets/renie-update/Layer_1.png"
                width={120}
                height={160}
                alt="Renie Hardware"
              />
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-4 text-center mb-3 mb-md-0 d-none d-md-block">
              <Image
                src="/assets/renie-update/Vector.png"
                width={170}
                height={140}
                alt="Software Access"
              />
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold text-right">
                Full Software Suites Access
              </h5>
              <ul className="text-right text-dark">
                <li>Renie Admin: Bin & region management</li>
                <li>Renie Hub: ESG dashboard</li>
                <li>Renie Rewards: White-labeled app</li>
                <li>Renie Ads: Behavioural ad targeting</li>
              </ul>
            </div>
            <div className="col-md-4">
              <figure className="img-center"><Image
                src="/assets/renie-update/img-1.png"
                width={300}
                height={170}
                alt="Renie Hardware"
              /></figure>
            </div>
          </div>

          <div
            className="row py-5"
            style={{ backgroundColor: "rgba(210, 221, 255, 1)" }}
          >
            <div className="col-md-4 text-center mb-3 mb-md-0 ">
              <Image
                src="/assets/renie-update/icon-12.png"
                width={150}
                height={140}
                alt="Software Access"
              />
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold">
                Training & Onboarding
              </h5>
              <ul className="text-dark">
                <li>Staff training session</li>
                <li>Partner onboarding toolkit</li>
                <li>Technical documentation</li>
              </ul>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0 d-none d-md-block">
              <Image
                src="/assets/renie-update/Layer_1.png"
                width={170}
                height={140}
                alt="Software Access"
              />
            </div>
          </div>

          <div className="row pt-5 py-md-5">
            <div className="col-md-4 text-center mb-3 mb-md-0 d-none d-md-block">
              <Image
                src="/assets/renie-update/Vector.png"
                width={170}
                height={140}
                alt="Software Access"
              />
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase text-right fw-bold">
                Support & SLA
              </h5>
              <ul className="text-right text-dark">
                <li>SLA-based technical support</li>
                <li>Partner Success team access</li>
                <li>System updates & feature releases</li>
              </ul>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <figure className="img-center">
              <Image
                src="/assets/renie-update/icon-13.png"
                width={150}
                height={140}
                alt="Software Access"
              />
              </figure>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn-2 mt-5"
              onClick={() => (window.location.href = "/renielicense")}
            >
              Explore the Full demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SixthSection;
