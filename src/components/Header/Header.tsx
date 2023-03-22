import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login:string | null
    isAuth:boolean
}

export const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.worldvectorlogo.com/logos/mediafire-1.svg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
        </header>
    );
};

