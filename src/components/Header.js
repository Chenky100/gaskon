import React from 'react'
import logo from '../imgs/logo.jpg'
import Nav from './Nav'

export default function Header() {
    return (
        <div className="header">
            <span className="nav-item">Wines</span>
            <span className="nav-item">Shop</span>

            <img className="logo" src={logo}></img>

            <span className="nav-item">about</span>
            <span className="nav-item">contact us</span>


        </div>
    )
}
