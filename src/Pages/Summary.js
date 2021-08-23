import Navbar from "../component/Navbar";

import { useSelector } from "react-redux";


const Summary = () => {
    const myCount = useSelector((state) => state.cartData)
    const {cart} = myCount
    return (
        <> 
        <Navbar/>
        <div className="m-4 row">
            <div className="col-md-8">
                <div className=" book-wrapper">
                    <p style={{borderBottom:"1px solid gray"}} className="pb-1">My Cart</p>
                    {cart.map((val,key)=>(
                        <div className="row mb-4" key={key}>
                            <div className="col-md-2">
                                <img src={val.img} width="100" />
                                <br/>
                                
                            </div>
                            <div className="col-md-4">
                                <h4>{val.book_name}</h4>
                                <div>{val.subtitle}</div>
                                <div>Seller:TrueComRetail</div>
                                <h3>{val.price}</h3>
                            </div>
                            <div className="col-md-4">
                                <p>Delivery by Thu Aug 26 | Free ₹40</p>
                                <div>7 Days Replacement Policy</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-4">
                <div className="book-wrapper">
                    <p style={{borderBottom:"1px solid gray"}} className="pb-1">PRICE DETAILS</p>
                    <div className="row">
                        <div className="col-md-8">
                            <p>Price</p>
                            <p>Discount</p>
                            <p>Delivery Charges</p>
                            
                            <h4>Total Amount</h4>
                            
                        </div>
                        <div className="col-md-4">
                            <p>₹ 335</p>
                            <p>- 116</p>
                            <p>Free</p>
                            <h4>500</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Summary