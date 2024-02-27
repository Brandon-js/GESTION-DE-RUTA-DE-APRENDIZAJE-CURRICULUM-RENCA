import React, { useState } from 'react';

function AccordionItem({ title, content, id, isActive, toggleAccordion }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(id)}
                    aria-expanded={isActive ? 'true' : 'false'}
                >
                    {title}
                </button>
            </h2>
            <div
                id={id}
                className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
            >
                <div className="accordion-body">{content}</div>
            </div>
        </div>
    );
}

export default AccordionItem;

