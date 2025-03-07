import { useState } from "react";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the admin panel support franchisees?",
      answer:
        "The admin panel provides real-time data, analytics, and management tools to streamline franchise operations.",
    },
    {
      question: "Can multiple franchisees access the panel?",
      answer:
        "Yes, each franchisee gets a secure login to manage their operations while the admin has full oversight.",
    },
    {
      question: "Does it integrate with third-party software?",
      answer:
        "Yes, the system supports integrations with popular accounting, CRM, and inventory management tools.",
    },
    {
      question: "Is training provided for using the panel?",
      answer:
        "Absolutely! We offer detailed documentation, video tutorials, and live training sessions.",
    },
    {
      question: "How secure is the data?",
      answer:
        "We use industry-standard encryption and regular security updates to ensure data safety.",
    },
  ];

  // Function to toggle open and close
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same item is clicked again
    } else {
      setOpenIndex(index); // Open the clicked accordion
    }
  };

  return (
    <section className="faqs">
      <div className="container">
        <h2 className="text-center mb-3">FAQ</h2>
        <h3 className="text-center">Answers</h3>
        <div className="accordion mt-5">
          {faqs.map((faq, index) => (
            <div className="accordion-items" key={index}>
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h4>{faq.question}</h4>
                <span><img src="/assets/reniehub/down-arrow.webp" alt="faqs"/></span>
              </div>
              <div
                className={`accordion-body ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
