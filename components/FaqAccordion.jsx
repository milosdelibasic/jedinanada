"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openItems, setOpenItems] = useState(() => new Set([0]));
  const toggleItem = index => {
    setOpenItems(previous => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
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
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className="faq-toggle" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path className="faq-symbol-plus" d="M5 12h14M12 5v14" />
                  <path className="faq-symbol-close" d="m7 7 10 10M17 7 7 17" />
                </svg>
              </span>
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
