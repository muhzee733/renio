const WasteManagement = () => {
  const features = [
    {
      title: "Save Time & Costs",
      description:
        "Reduce operational inefficiencies and automate waste tracking.",
      icon: "/assets/reniehub/Layer_1.webp",
    },
    {
      title: "Always Connected",
      description: "24/7 real-time monitoring for seamless waste tracking.",
      icon: "/assets/reniehub/Layer_2.webp",
    },
    {
      title: "Smart Diagnostics",
      description:
        "Gain clear, data-driven reports on waste levels and disposal status.",
      icon: "/assets/reniehub/Layer_3.webp",
    },
    {
      title: "Clear Communication",
      description:
        "Eliminate miscommunication with precise tracking and reporting.",
      icon: "/assets/reniehub/Layer_4.webp",
    },
    {
      title: "Proactive Maintenance",
      description:
        "Stay ahead with scheduled bin servicing and predictive maintenance.",
      icon: "/assets/reniehub/Layer_5.webp",
    },
    {
      title: "Historical Insights",
      description:
        "Access detailed records for better waste analytics and optimization.",
      icon: "/assets/reniehub/Layer_6.webp",
    },
    {
      title: "New Opportunities",
      description:
        "Optimize waste collection, reduce costs, and unlock new revenue streams.",
      icon: "/assets/reniehub/Layer_7.webp",
    },
    {
      title: "Sustainable Impact",
      description:
        "Minimize environmental footprint with data-driven waste reduction.",
      icon: "/assets/reniehub/Layer_8.webp",
    },
  ];

  return (
    <section className={`text-center py-5 management`}>
      <div className="container">
        <h2 className="fw-bold">
          Unlock the Full Potential of Your Waste Management with Renie Hub
        </h2>
        <p className="management-test">
          Energy, time, and resources lost in waste management? It’s time for a
          change.
        </p>

        <div className="row mt-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 col-sm-6 p-2">
              <div className="car h-100 shadow-sm p-4 bg-white rounded-4">
                <div className="">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mb-3"
                  />
                </div>
                <h5 className="fw-bold text-left managment-title">
                  {feature.title}
                </h5>
                <p className="text-muted text-left">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-white managemnt-paragraph">
          Renie Hub transforms waste management into an intelligent, efficient,
          and eco-friendly system.
        </p>
      </div>
    </section>
  );
};

export default WasteManagement;
