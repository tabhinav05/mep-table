import React from 'react';
import "./nav.css";
import Image from "../../assets/bell.png";

const Nav = () => (
    <ul className="nav">
                <li><a><img src={Image} className="bell" alt=""/></a></li>
                <li><a><div className="que-cr"><p><b>?</b></p></div></a></li>
                <li><a><div>Help</div></a></li>
                <li><div className="line"></div></li>
                <li><a><div>Brandon</div></a></li>
                <li><a><div>Wright</div></a></li>
                <li><a><div className="br"><p><b>BR</b></p></div></a></li>
    </ul>
)

export default Nav;

