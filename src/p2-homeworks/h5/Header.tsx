import React from 'react'
import { PATH } from "./Routes1";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css"


function Header() {
    return (
        <div className={s.big}>
                <Link className={s.link} to={PATH.PRE_JUNIOR}>J</Link>
                <Link className={s.link} to={PATH.PRE_MIDDLE}>M</Link>
                <Link className={s.link} to={PATH.PRE_SINIOR}>S</Link>
        </div>
    )
}

export default Header


