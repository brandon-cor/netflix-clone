import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js';

const TitleCards = ({ title, category }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="title-cards">
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list-container">
                <div className="card-list" ref={scrollRef}>
                    {cards_data.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.image} alt={card.title} />
                            {/* TO-DO: this needs to be changed out for a hover feature which will reveal the name */}
                            <p>{card.name}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-right-button" onClick={scrollRight}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

/* test */

export default TitleCards;
