import { useState } from 'react';
import logo from '../../assets/logo.svg';
import './index.scss';
import { FaSearch } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";


export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="opcoes">
                <a href="">Black Friday</a>
                <a href="">Lançamentos</a>
                <a href="">Ofertas</a>
                <a href="">Masculino</a>
                <a href="">Feminino</a>
                <a href="">Infantil</a>
                <a href="">SNKRS</a>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Buscar" />
                </div>
                <a className='favoritos' href="">{<IoIosHeartHalf/>}</a>
                <a className='carrinho' href="">{<FaCartShopping/>}</a>
            </div>
        </header>
    );
}
