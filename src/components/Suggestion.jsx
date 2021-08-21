import React, { useState } from 'react';
import { data } from "../mock/data.js";
import Card3 from './Card3.jsx';

const Suggestion = (props) => {
    const [activeTab, setActiveTab] = useState(1);

    const [cards, setCards] = useState(data)
    const [filteredCards] = useState(cards);

    const filterCard = (filterType) => {
        if (filterType === "offers") {
            setCards(filteredCards.filter(value => value.rate === "normal"));
            setActiveTab(2);
        }
        else if (filterType === "rating") {
            setCards(filteredCards.filter(value => value.rate === "best"));
            setActiveTab(3)
        }
        else if (filterType === "sale") {
            setCards(filteredCards.filter(value => value.price > 35));
            setActiveTab(4)
        }
        else if (filterType === "cheap") {
            setCards(filteredCards.filter(value => value.price < 35));
            setActiveTab(5)
        }
        else if (filterType === "all") {
            setCards(filteredCards);
            setActiveTab(1);
        }
    }


    return (
        <div className="suggestions">
            <div className="buttons d-flex w-100">

                <div className={`${activeTab === 1 ? 'filtertab active' : 'filtertab'}`}>
                    <button className="btn font-montserrat-bold" onClick={() => filterCard('all')}>ALL PRODUCTS</button>
                </div>
                <div className={`${activeTab === 2 ? 'filtertab active' : 'filtertab'}`}>
                    <button className="btn font-montserrat-bold" onClick={() => filterCard('offers')}>OUR OFFERS</button>
                </div>
                <div className={`${activeTab === 3 ? 'filtertab active' : 'filtertab'}`}>
                    <button type="button" className="btn font-montserrat-bold" onClick={() => filterCard('rating')}>TOP RATING</button>
                </div>
                <div className={`${activeTab === 4 ? 'filtertab active' : 'filtertab'}`}>
                    <button className="btn font-montserrat-bold" onClick={() => filterCard('sale')}>Top Sale</button>
                </div>
                <div className={`${activeTab === 5 ? 'filtertab active' : 'filtertab'}`}>
                    <button type="button" className="btn font-montserrat-bold" onClick={() => filterCard('cheap')}>CHEAP PRODUCTS</button>
                </div>

                <div>

                </div>
            </div>
            <div className="row mt-4">
                {
                    cards.map((value) => {
                        return (
                            <div className="col-4 mt-3" key={value.id}>
                                <Card3
                                    item = {value}
                                    history={props.history}
                                />
                            </div>
                        )
                    })
                }
            </div>

    
        </div>
    )
};


export default Suggestion;