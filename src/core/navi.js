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
                {/* <div className="christmasLights"></div> */}

                <div className="nav-bar-top">
                    <img src="/images/cart.svg" className="nav-bar-cart"/>
                    <a><img src="/images/ira-logo.jpg" className="nav-bar-logo"/></a>

                    <ul className="languagepicker" >
                        <a href="#en"><li className="language">English</li></a>
                        <a href="#de"><li className="language">Deutsch</li></a>
                    </ul>


                </div>









                <div className="nav-bar-bottom">
                    <Link to="/" className="nav-bar-font">home</Link>
                    <Link to="/about" className="nav-bar-font">about</Link>
                    <Link to="/portfolio" className="nav-bar-font">portfolio</Link>
                    <Link to="/shop" className="nav-bar-font">shop</Link>
                </div>



            </div>
        )

}
//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
