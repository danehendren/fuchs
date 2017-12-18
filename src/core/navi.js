import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router';
import About from './about';
import Portfolio from './portfolio';
import Welcome from './welcome';
import Home from './home';



export default function Navi(){






        return(
            <div>
                <div className="nav-bar-top">
                    <img src="/images/cart.svg" className="nav-bar-cart"/>
                    <a><img src="/images/ira-logo.jpg" className="nav-bar-logo"/></a>

                    <ul className="languagepicker" >
                        <a href="#en"><li><img src="http://i64.tinypic.com/fd60km.png"/>English</li></a>
                        <a href="#de"><li><img src="http://i63.tinypic.com/10zmzyb.png"/>Deutsch</li></a>
                    </ul>


                </div>









                <div className="nav-bar-bottom">
                    <Link to="/home" className="nav-bar-font">Home</Link>
                    <Link to="/about" className="nav-bar-font">About</Link>
                    <Link to="/portfolio" className="nav-bar-font">Portfolio</Link>
                    <Link to="/shop" className="nav-bar-font">Shop</Link>
                </div>
            </div>
        )

}
//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
