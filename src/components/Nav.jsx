import React, { useState, useEffect } from 'react';
import './styles/nav.scss';

let prevScrollPos = window.pageYOffset;

const listener = e => {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if(currentScrollPos < 150) {
        document.getElementById("nav-logo").style.transform = "translateY(1em)";
        document.getElementById("nav-logo").style.fontSize = "8em";
        document.getElementById("nav-logo").style.backgroundColor = "rgba(0, 0, 0, 0.62)";
        document.getElementById("nav-logo").style.position = "absolute";

        document.getElementById("nav-logo").style.display = "block";
    } else {
        document.getElementById("nav-logo").style.transform = "translateY(0em)";
        document.getElementById("nav-logo").style.background = "none";
        document.getElementById("nav-logo").style.fontSize = "2em";
        // document.getElementById("nav-logo").style.position = "relative";

        document.getElementById("nav-logo").style.display = "inline-block";
    }
    if(currentScrollPos < 170) {
        document.getElementById("nav").style.top = "0";
    }
    else if(prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-6em";
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
            <div id="navbar" className="navbar">
                <div className="navbar-item"><a href="" className="nav-link">About</a></div>
                <div id="nav-logo" className="navbar-item"><a href="" className="nav-link">-J-</a></div>
                <div className="navbar-item"><a href="" className="nav-link">Contact</a></div>
            </div>
        </nav>
    )
}