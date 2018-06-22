import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default () => {
    return (
        <ul className='nav nav-tabs mt-3'>
            <li className='nav-item'>
                <NavLink exact to='/' className='nav-link' activeClassName='active selected'>Welcome</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to ='/our-macarons' className='nav-link' activeClassName='active selected'>Our Macarons</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to ='/gifts-parties' className='nav-link' activeClassName='active selected'>Gifts &amp; Parties</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to ='/contact' className='nav-link' activeClassName='active selected'>Contact</NavLink>
            </li>
        </ul>
    )
}