import React from 'react';
import s from "./Header.module.css";
type BurgerType = {
    burger: () => void
    menu: boolean
}
export const Burger: React.FC<BurgerType> = ({burger, menu}) => {
    return (
        <div className={s.burger}>
            <div className = {menu ? s.big : s.noneBig} onClick={burger}>
                <span className={s.span}></span>
            </div>
        </div>
    );
}

export default Burger;