import React from 'react';
import s from "./Header.module.css";
import {Link} from "react-router-dom";
import {PATH} from "./Routes1";


export const Menu = () => {
    return (
        <div className={s.body}>
            <div className={s.uplink}><Link className={s.link} to={PATH.PRE_JUNIOR}>JUNIOR</Link></div>
            <div className={s.uplink}><Link className={s.link} to={PATH.PRE_MIDDLE}>MIDDLE</Link></div>
            <div className={s.uplink}><Link className={s.link} to={PATH.PRE_SINIOR}>SINIOR</Link></div>
        </div>

    )
}

export default Menu;