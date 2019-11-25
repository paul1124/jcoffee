import React, { useState, useEffect } from 'react';
import './styles/nav.scss';

let prevScrollPos = window.pageYOffset;

const listener = e => {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if(currentScrollPos < 150) {
        document.getElementById("nav-logo").style.transform = "translateY(2em)";
        document.getElementById("nav-logo").style.fontSize = "8em";
        document.getElementById("nav-logo").style.backgroundColor = "rgba(0, 0, 0, 0.62)";
        document.getElementById("nav-logo").style.position = "absolute";
    } else {
        document.getElementById("nav-logo").style.transform = "translateY(0em)";
        document.getElementById("nav-logo").style.background = "none";
        document.getElementById("nav-logo").style.fontSize = "2em";
        document.getElementById("nav-logo").style.position = "relative";
    }
    if(currentScrollPos < 170) {
        document.getElementById("nav").style.top = "0";
    }
    else if(prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-60px";
    }
    prevScrollPos = currentScrollPos;
}

export default function Nav() {
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);
    return (
        <nav className="nav" id="nav">
            <ul id="navbar" className="navbar">
                <li className="navbar-item"><a href="" className="nav-link">About</a></li>
                <li id="nav-logo" className="navbar-item"><a href="" className="nav-link">-J-</a></li>
                <li className="navbar-item"><a href="" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    )
}