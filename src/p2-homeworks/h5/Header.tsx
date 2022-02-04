import React from 'react'
import {PATH} from "./Routes1";
import {Link, NavLink} from "react-router-dom";


function Header() {
    return (
        <div>
            <Link to={PATH.PRE_JUNIOR}>J</Link>
            <Link to={PATH.PRE_MIDDLE}>M</Link>
            <Link to={PATH.PRE_SINIOR}>S</Link>
        </div>
    )
}

export default Header
