import React from 'react';

const ShopCard = (props) => {
    return (
        <div className="shop-card px-2">
            <div className="card">
                <div className="card-header">
                   <img src={props.value.src} className="w-100 h-100 mx-auto rounded" alt="" />
                </div> 
                <div className="card-body">
                    <h5>{props.value.name}</h5>

                    <div className="d-flex justify-content-between mt-4 align-items-center">
                        <p className="font-montserrat mb-0">starting from:</p>
                        <h4 className="font-montserrat-bold mb-0">${props.value.price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShopCard;