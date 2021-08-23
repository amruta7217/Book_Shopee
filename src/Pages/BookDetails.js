import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Navbar from "../component/Navbar";
import {cartData} from "../actions/index";

const cartArr = []

const BookDetails = (props) => {
    const history = useHistory();
    const {details} = props.location.state
    const dispatch = useDispatch()
    const myCount = useSelector((state) => state.cartData)

    const handleCart = () => {
        if(!myCount.cart){
            cartArr.push(details)    
        }else{
            cartArr.push(details,...myCount.cart)
        }
        dispatch(cartData(cartArr))
        history.push('/summary')
    }

    return(
       <>
        <Navbar/>
        <div className="row p-4">
            <div className="col-md-4">
                <img src={details.img} style={{width:"80%"}} />
                <div className="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group" style={{paddingRight:"10px"}}>
                        <button type="button" className="btn btn-secondary" 
                            style={{background:"#ff9f00",borderColor:"#ff9f00"}}
                            onClick={() => handleCart()}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-secondary" style={{background:"#fb641b",borderColor:"#fb641b"}}>BUY NOW</button>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-8">
                <h3>{`${details.book_name} (${details.subtitle})`}</h3>
                <div>51,957 Ratings & 4,706 Reviews</div>
                <div style={{color:"green"}}>Special price</div>
                <div className="d-flex">
                    <h3>{details.price} </h3>  
                    <div className="mr-2">₹ 225 48% off</div>
                </div>
                <h4>Available offers</h4>
                <div>
                    <b>Special Price</b> <span>Get extra 17% off (price inclusive of discount)</span>
                </div>
                <div>
                    <b>Bank Offer</b> <span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                </div>
                <div>
                    <b>Bank Offer</b> <span>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</span>
                </div>
                <div>
                    <b>Bank Offer</b> <span>10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</span>
                </div>
                <div className="row mt-3">
                    <h4>Highlights</h4>
                    <div>Language : English</div>
                    <div>Binding : PaperBack</div>
                    <div>Publisher : Srishti Publishers & Distributors</div>
                    <div>Genre : Self-Help</div>
                    <div>ISBN : 9788194790884</div>
                    <div>Edition : First, 2020</div>
                    <div>Pages : 296</div>
                </div>
            </div>
        </div>
       </>
    )
}

export default BookDetails