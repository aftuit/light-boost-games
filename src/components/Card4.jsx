import React, {useState} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Collapse } from 'reactstrap';
import { ModalBody, Modal, ModalFooter } from 'reactstrap';
import { updateBuyAction } from '../redux/actions/buyAction';
const Card4 = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    const getBuy = (price) => {
        toast.info("you've bought successfully for " + price + " $ ")
        props.updateBuyAction({isBuy: false})
    }

    const getModal = (price) => {
        props.updateBuyAction({isBuy: true})
        props.updateBuyAction({itemPrice: price})

    }

    return (        
        <div className="card4 card mt-3" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0%, rgba(0, 0, 0, 0.49) 100%), url(${props.item.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: "100% 100%",
        }}>
            <Modal isOpen={props.isBuy} toggle={props.isBuy}>
                <ModalBody>
                    Are you sure buy for <span className="font-montserrat-bold">{`${props.itemPrice}$`}</span>?
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={() => getBuy(props.itemPrice)}>Yes</button>
                    <button type="button" className="btn btn-success" onClick={() => props.updateBuyAction({ isBuy: false })}>No</button>
                </ModalFooter>
            </Modal>
            <div className="card-body text-white">
                <h1>{props.item.name}</h1>
                <ul>
                    <li>Created in {props.item.createdData}</li>
                    <li>Best of the best</li>
                </ul>
                <p onClick={toggle}>Brands <span> {isOpen? '⏷' :  '⏶'}</span></p>
                <Collapse isOpen={isOpen} className="collapse-col">
                <ul>
                    {
                        props.item.brand.items.map(value => {
                            return(
                                <li>{value}</li>
                            )
                        })
                    }
                </ul>
                </Collapse>
                <div className="buy-info d-flex align-items-center justify-content-between">
                    <div>
                        <p className="m-0 font-montserrat">COST</p>
                        <span className="font-montserrat-bold" onClick={()=>toast.dark(props.item.price)}> ${props.item.price}</span>
                    </div>

                    <button type="button" className="btn btn-success font-montserrat" onClick={() => getModal(props.item.price)}>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return{
        isBuy: state.buy.isBuy,
        itemPrice: state.buy.itemPrice
    }
}

export default connect(mapStateToProps, {updateBuyAction})(Card4);