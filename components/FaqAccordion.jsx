"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;
        const questionId = `faq-question-${index}`;

        return (
          <div className={isOpen ? "faq-item is-open" : "faq-item"} key={item.question}>
            <button
              className="faq-question"
              id={questionId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-toggle" aria-hidden="true"><Icon name="plus" size={14} /></span>
            </button>
            <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen}>
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
