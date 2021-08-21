import React, {useState} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { updateBuyAction, moreInfoByUrl } from '../redux/actions/buyAction';
import {Tooltip} from 'reactstrap';
const Card3 = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const addToCard = (data) => {
        if(!props.cards.includes(data)){
            props.cards.push(data)
            toast.success(`"${data.name}" been added to cards`)
        } else toast.warning(`"${data.name}" had been already added`)
    }

    return (
        <div className="card" style={{
            backgroundImage: `url(${props.item.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "100% 100%",
        }}>
            <div className="price">
                <img src="/assets/icon/price.svg" alt="" />
                <span className="cost">{"$" + props.item.price}</span>
            </div>
            <div className="card-body">
                <div className="card-name">
                    <h2 className="text-white font-montserrat">{props.item.name}</h2>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <button 
                        type="button" 
                        className="btn mt-4 text-white font-montserrat" 
                        onClick={() => addToCard(props.item)}>ADD TO CARDs</button>
                    <button 
                        onClick={() => {props.moreInfoByUrl(generateUrl(props.item.name), props, props.history)}}
                        type = "button" 
                        id = {`more-${props.item.id}`} 
                        className = "btn mt-4 text-white">{'->'}</button>
                    <Tooltip placement="bottom" isOpen={tooltipOpen} target={`more-${props.item.id}`} toggle={toggle}>
                        more information
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cards: state.buy.cards
    }
}
export default connect(mapStateToProps, { updateBuyAction, moreInfoByUrl })(Card3);

/* 
export const moreInfoByUrl = (url_path, item, history) => (dispatch) => {
    dispatch(getCards(item))
    history.push('/home/more/' + url_path)
}
*/