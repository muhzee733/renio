const FaqAccordion = () => {
  const faqs = [
    {
      question: "How does the admin panel support franchisees?",
      answer: "The admin panel provides real-time data, analytics, and management tools to streamline franchise operations.",
    },
    {
      question: "Can multiple franchisees access the panel?",
      answer: "Yes, each franchisee gets a secure login to manage their operations while the admin has full oversight.",
    },
    {
      question: "Does it integrate with third-party software?",
      answer: "Yes, the system supports integrations with popular accounting, CRM, and inventory management tools.",
    },
    {
      question: "Is training provided for using the panel?",
      answer: "Absolutely! We offer detailed documentation, video tutorials, and live training sessions.",
    },
    {
      question: "How secure is the data?",
      answer: "We use industry-standard encryption and regular security updates to ensure data safety.",
    },
  ];

  return (
    <section className="faqs">
      <div className="container">
        <h2 className="text-center mb-3">FAQ</h2>
        <h3 className="text-center">Answers</h3>
        <div className="accordion mt-5" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
