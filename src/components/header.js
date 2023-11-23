import React from 'react';
import './header.css';

export function Header() {
    const scrollToPoint = (val) => {
        const element = document.getElementById(val);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='container'>
            <header className='header'>
                <nav>
                    <ul>
                        <li onClick={() => scrollToPoint("edu")}>Education</li>
                        <li onClick={() => scrollToPoint("exp")}>Experience</li>
                        <li onClick={() => scrollToPoint("ski")}>Skills</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
