import React from 'react';
import logo from '../assets/img/logo-svg.svg';
import { strings } from '../utils/strings';

const Header = () => {
    return (
        <header className="flex flex-col items-center p-4 bg-primary lg:mb-8">
            <div className="flex items-center justify-center mb-4 h-24">
                <img src={logo} alt="Company Logo" className="logo w-3/4" />
            </div>
            <h1 className="w-full text-left text-3xl lg:text-5xl font-bold text-secondary">
                {strings.NEWS}
            </h1>
        </header>
    );
};

export default Header;