import React from "react";
import Navbar from "../component/Navbar";
import '../scss/style.css'
import { useHistory } from "react-router-dom";
import {data} from "./data";

const Books = () => {
    const history = useHistory();
     const handleBookDetails = (val) => {
         console.log("data",val)
        history.push({
            pathname:'bookdetails',
            state:{details:val}
        })
    }
    return(
        <div>
           <Navbar/>
           <div className="main-container">
                <div className="wrapper">
                    <div className="book-filter">
                        <div className="book-container">
                            <div className="book-wrapper">
                                <div className="mb-2">CATEGORIES</div>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Books</option>
                                    <option value="Ficiton_Books">Ficiton Books</option>
                                    <option value="life_style_hobby">Life Style and Hobby</option>
                                    <option value="school_books">School Books</option>
                                    <option value="other_books">Other Books</option>
                                </select>
                                <div className="mb-2 mt-4">LATEST ARRIVALS</div>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        Last 30 Days
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        Last 90 Days
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        Last 150 Days
                                    </li>
                                </ul>
                                <div className="mb-2 mt-4">AGE GROUP</div>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        0-10
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        Teen
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        18+
                                    </li>
                                </ul>
                                <div className="mb-2 mt-4">DISCOUNT</div>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        60% or more
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        50% to 60%
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        20% to 40%
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        10% and below
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="book-data">
                    <div className="book-container">
                            <div className="book-wrapper row">
                                {data.map((val)=>(
                                    <div className="col-md-4" onClick={() => handleBookDetails(val)}>
                                            <div className="card">
                                                <img className="card-img-top" src={val.img} alt="Card image cap" style={{height:"250px"}}/>
                                                <div className="card-body">
                                                    <h5 className="card-title book_title">{val.book_name}</h5>
                                                    <div className="card-text">{val.subtitle}</div>
                                                    <div style={{color:"green"}}>{val.star} Star</div>
                                                    <b>{val.price}</b>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Books