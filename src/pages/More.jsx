import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ITEM } from '../tools/const';
const More = (props) => {
    
    let items = JSON.parse(localStorage.getItem(ITEM));
    

    return (
    
        <div className="more-infomation">
            <Navbar history={props.history} />

            <div className="more-content">
                <Link className="back-link" to="/home">Home </Link>
                <Link className="back-link" to="/home/shop">  &#65125; Shop </Link>
                <span> &#65125; {items.item.name} </span>
            

            <div className="content-wrap w-75 mx-auto mt-5">
                <div className="row d-flex ">
                    <div className="col-6">
                        <img src={items.item.src} alt="" />
                    </div>

                    <div className="col-6">
                        <h1 className="font-montserrat-bold">{items.item.name}</h1>
                        <div className="brands_ font-montserrat">
                            <h6 className="font-montserrat-bold">Brands</h6>
                            <ul>
                                {
                                 items.item.brand.items.map(value => {
                                     return(
                                         <li key={value}>{value}</li>
                                     )
                                 })   
                                }
                            </ul>
                        </div>
                        <div className="buy__card font-montserrat d-flex justify-content-between align-items-center">
                            <span className="font-montserrat-bold">{items.item.price}$</span>

                           <Link to="/home/shop">
                                <button className="btn btn-success">go to Shop</button>
                           </Link>
                        </div>
                    </div>
                </div>

                <div className="info-content w-75 mt-5">
                    <h1>INFORMATION</h1>

                    <p className="font-montserrat mt-3">
                        {items.item.info}
                    </p>
                </div>
            </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.buy.items
    }
} 

export default connect(mapStateToProps, null)(More);