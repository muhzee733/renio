import { useState } from "react";
import H2 from "../Typography/H2";
import { HiArrowSmallDown } from "react-icons/hi2";
import P from "../Typography/P";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Renie Hub?",
      answer:
        "Renie Hub is a centralized platform designed for providers of Renie Smart Bins. It allows users to monitor their bins, track waste collection, view environmental impact, and manage earnings—all in one place.",
    },
    {
      question: "Who can use Renie Hub?",
      answer:
        "Renie Hub is designed for corporate clients and partners (providers) who own or manage Renie Smart Bins. If you're a provider, this is your go-to dashboard for tracking activity, performance, and sustainability outcomes in real time.",
    },
    {
      question: "Can I generate reports through Renie Hub?",
      answer:
        "Absolutely! Renie Hub includes built-in tools that let you generate detailed reports on bin usage, collection patterns, and more. Need something specific? We can also help you create custom reports—subject to approval—to meet your business goals.",
    },
    {
      question: "Can I track earnings and request payouts?",
      answer:
        "Yes! Renie Hub allows you to monitor your earnings based on the waste collected. When you're ready, you can easily submit a payout request directly through the platform.",
    },
    {
      question: "Can I trace where the waste goes after collection?",
      answer:
        "Yes. With Renie Hub’s Waste Bag Journey feature, you can trace each waste bag from the bin all the way to the recycling facility. It’s designed to give you complete transparency and confidence in how your waste is being handled.",
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
      <div className="container-xl">
        <h2 className="text-center mb-3">FAQ</h2>
        <H2 title="Answers" />
        <div className="accordion mt-5">
          {faqs.map((faq, index) => (
            <div className="accordion-items" key={index}>
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h4>{faq.question}</h4>
                <span className="text-dark bg-white p-2 rounded-3">
                  <HiArrowSmallDown />
                  {/* <img src="/assets/reniehub/down-arrow.webp" alt="faqs" /> */}
                </span>
              </div>
              <div
                className={`accordion-body ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <P title={faq.answer} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
