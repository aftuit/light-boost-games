import React from 'react';

const Advantages = () => {
    return (
        <div className="advantage-wrap text-white">
                <h2 className="font-montserrat-bold ">OUR ADVANTAGES</h2>
            <div className="row">
                <div className="col-3">
                    <div className="circle-wrapper d-flex">
                        <img src="/assets/icon/timer.svg" alt="" />
                    </div>
                    <span>Fast execution</span>
                </div>
                <div className="col-3">
                    <div className="circle-wrapper d-flex">
                        <img src="/assets/icon/best.svg" alt="" />
                    </div>
                    <span>Warranty service 24/7</span>
                </div>
                <div className="col-3">
                    <div className="circle-wrapper d-flex">
                        <img src="/assets/icon/book.svg" alt="" />
                    </div>
                    <span>Сonvenient payment</span>
                </div>
                <div className="col-3">
                    <div className="circle-wrapper d-flex">
                        <img src="/assets/icon/customers.svg" alt="" />
                    </div>
                    <span>Discounts for customers</span>
                </div>
            </div>            
        </div>
    );
};


export default Advantages;