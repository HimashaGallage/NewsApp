import React from 'react';
import logo from '../assets/img/logo-svg.svg';
import { strings } from '../utils/constants';

const Header = () => {
    return (
        <header className="flex flex-col items-center mb-0 lg:mb-8  p-4 bg-primary">
            <div className="flex items-center justify-center mb-4 h-24">
                <img src={logo} alt="Logo" className="logo w-3/4" />
            </div>
            <div className="w-full text-left">
                <h1 className="text-3xl lg:text-5xl font-bold text-secondary">{strings.NEWS}</h1>
            </div>
        </header>
    );
};

export default Header;