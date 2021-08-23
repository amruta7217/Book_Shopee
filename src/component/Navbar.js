import React from 'react'
import { Link } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.png";
import { useSelector } from "react-redux";

import "../scss/style.css"

const Navbar = () => {
  const myCount = useSelector((state) => state.cartData)
    console.log("*********",myCount)
    const {cart} = myCount
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Books</a>
            
            <form class="d-flex">
            <img
                src={cartIcon}
                alt=""
                width="30"
                style={{ position: "relative",marginRight:"16px" }}
              />
              <div className="cart_count">
               {cart.length ? cart.length : 0}
              </div>
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                <button class="btn btn-outline-success" type="submit">Login</button>
            </form>
            </div>
        </nav>
        </>
    )
}

export default Navbar