import React, { useState } from 'react';
import Logo from "../../assets/navBarLogo.jpeg";
import ButtonComponent from '../StoreView/ButtonComponent';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-25 h-25 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <Link to="/">
            <button>
              <img className="rounded-full" src={Logo} alt="Logo" />
            </button>
          </Link>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between gap-5">
              <ButtonComponent category= "Armas" estiloBoton="bg-zinc-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
              <ButtonComponent category= "Armaduras" estiloBoton="bg-zinc-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
              <ButtonComponent category= "Monturas" estiloBoton="bg-zinc-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button className="px-4 py-2 bg-zinc-600 hover:bg-zinc-800 text-gray-50 rounded-full flex items-center gap-2">
              <svg className="h-8 w-8 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              5
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

