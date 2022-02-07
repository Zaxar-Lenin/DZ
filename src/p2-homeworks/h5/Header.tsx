import React, {useState} from 'react'
import s from "./Header.module.css"
import Menu from "./menu";
import Burger from "./burger";


function Header() {
    let [menu, setMenu] = useState<boolean>(false)
    const burger = () => {
        setMenu(!menu)
    }
    return (
        <div className={s.wrapping}>
            {menu && <Menu/>}
            <Burger menu = {menu} burger = {burger}/>
        </div>
    )
}

export default Header


