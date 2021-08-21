import React from 'react';
const Subscribe = () => {
    return (
        <div className="subs-wrap">
            <div className="row">
                <div className="col-6">
                    <h2 className="font-montserrat-bold">SUBSCRIBE</h2>
                    <p className="font-montserrat">Subscribe us and you won't miss the new arrivals, 
                        as well as discounts and sales.</p>
                    
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button type="button" className="btn">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;