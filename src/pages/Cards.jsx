import React from 'react';
import { connect } from 'react-redux';
import Card4 from '../components/Card4';
import { updateBuyAction } from '../redux/actions/buyAction';
import Navbar from "../components/Navbar";
const Cards = (props) => {
  
    return (
        <div className="cards-wrap">
            <Navbar history={props.history}/>
            <div className="row card-row">
                {
                    props.cards.length === 0 ?
                        (<h1 className="font-montserrat-bold">You haven't added any card yet !</h1>) :
                        props.cards.map(item => {
                            return (
                                <div className="col-3" key={item.id}>
                                    <Card4 item={item} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.buy.cards,
        isBuy: state.buy.isBuy
    }
}
export default connect(mapStateToProps, {updateBuyAction})(Cards);