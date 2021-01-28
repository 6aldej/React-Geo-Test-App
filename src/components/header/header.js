import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header-block">
            <ul className="header-links">
                <li>
                    <NavLink to='/' exact>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/form/'>Форма</NavLink>
                </li>
                <li>
                    <NavLink to='/collection/'>Коллекция</NavLink>   
                </li>
            </ul>
        </div>
    );
};

export default Header;