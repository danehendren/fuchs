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
                    <img src="/images/cart.svg" className="nav-bar-logo"/>
                    <a><img src="/images/catkisscir.png" className="nav-bar-logo"/></a>
                    <p className="nav-bar-font">Language Feature</p>
                </div>

                <div className="nav-bar-bottom">
                    <Link to="/home" className="nav-bar-font">Home</Link>
                    <Link to="/about" className="nav-bar-font">About</Link>
                    <Link to="/portfolio" className="nav-bar-font">Portfolio</Link>
                    <h3 className="nav-bar-font">Store</h3>
                </div>
            </div>
        )

}
//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
