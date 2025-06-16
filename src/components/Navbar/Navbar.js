import React from 'react';
import './Navbar.css';
import { MdLightMode, MdNightlight } from 'react-icons/md';

const Navbar = ({ toggleTheme, theme }) => {
    const logo = "[Rimma Esheva]";
    
    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <a href="/"><h1>{logo}</h1></a>
                </div>
                <ul className='nav-list'>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <MdNightlight className='icon' size={25} />
                            ) : (
                                <MdLightMode className='icon' size={25} />
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;