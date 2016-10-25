import React from "react";
import {Link} from "react-router"
import style from "../css/style.css";

export const Header = () =>{
    return(
        <div>
            <div className={style.topNavigation}>
                <div className="container">
                    <ul>
                        <li><Link>LOGIN</Link></li>
                        <li><Link>REGISTER</Link></li>
                    </ul>
                </div>
            </div>
            <nav className="white">
                <div className="nav-wrapper container">
                    <ul id="nav-mobile">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link href="#">Product</Link></li>
                        <li><Link href="#">About Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}