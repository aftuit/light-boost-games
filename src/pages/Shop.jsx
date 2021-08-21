import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import { filterData } from '../mock/filterData';
import { brandTypes } from '../mock/brandTypes';
import { data } from "../mock/data.js";
import Card4 from '../components/Card4';
import Footer from '../components/Footer';
const Shop = (props) => {

    const [refineBy, setRefineBy] = useState([])
    const [filteredCards] = useState(data)
    const [newFilteredCards, setNewFilteredCards] = useState([])

    const getFilterData = () => {
        filteredCards.forEach(item => {
            refineBy.forEach(value => {
                (item.brand.items.indexOf(value) !== -1) &&
                    (!newFilteredCards.includes(item)) &&
                    setNewFilteredCards(currentCards => [...[...currentCards], item])
            })
        })
    }
    
    const getItems = (title) => {
        (!refineBy.includes(title)) &&
            setRefineBy(refineBy => [...refineBy, title])
    }

    const deleteItem = (index) => {
        setRefineBy(currentRefineBy => currentRefineBy.filter((refineBy, i) => i !== index))
    }

    return (
        <div className="shop">
            <Navbar history={props.history} />
            <div className="shop-container">
                <div><Link className="back-link" to="/home">Home </Link> <span> &#65125;  Shop</span></div>
                <h1 className="font-montserrat-bold ">SHOP</h1>
                <div className="mt-5">
                    <Carousel data={brandTypes} />
                </div>
                <div className="row justify-content-between mt-5">


                    <div className="col-3">
                        <h1 className="font-montserrat-bold">FILTER BY</h1>
                        <div className="refine-by">
                            <h5 className="font-montserrat-bold mt-3">REFINE BY</h5>
                            {
                                (refineBy.length === 0) ?
                                    (<span>No filters applied</span>) :
                                    <div>
                                        <div className="d-flex filtered-box">
                                            {refineBy?.map((item, index) => {
                                                return (
                                                    <div key={item} className="filtered-by">
                                                        {item}

                                                        <span onClick={() => deleteItem(index)} className="ms-2">&times;</span>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                        <span onClick={() => setRefineBy([])} className="text-danger mt-3 d-block text-center text-decoration-underline">clear all</span>
                                        <button type="button" onClick={getFilterData} className="d-block btn btn-primary w-100 mt-2">filter</button>
                                    </div>
                            }
                        </div>
                        <div className="brands">
                            <h5>BRAND</h5>
                            <div className="nav flex-column">
                                {
                                    filterData.map(item => {
                                        return (
                                            <button
                                                type="button"
                                                key={item.id}
                                                onClick={() => getItems(item.title)}
                                                className="btn btn-success w-100 mt-1">
                                                {item.title}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <h1 className="font-montserrat-bold">PRODUCTS</h1>
                        <div className="row-scroll row card-row mt-2">
                            {
                                (newFilteredCards.length === 0) ?
                                    <h4 className="font-montserrat-bold">Not chosen any filters yet !</h4> :
                                    newFilteredCards.map(item => {
                                        return (
                                            <div className="col-4 px-1" key={item.id}>
                                                <Card4 item={item} />
                                            </div>
                                        )
                                    })
                            }
                        </div>
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
    return {
        filteredCards: state.buy.filteredCards,
        refineBy: state.buy.refineBy,
    }
}

export default connect(mapStateToProps, null)(Shop);