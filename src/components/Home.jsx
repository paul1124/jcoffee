import React from 'react';
import './styles/home.scss';

const Home = () => {
    // const bullet = '&#8226;';
    return (
        <section className="home" id="home">
            <div className="home-border">
                <h2 className="home-alpha">-J-</h2>
                <p className="home-beta">Coffee Inc.</p>
            </div>
            <p className="home-message">At Your Service</p>
        </section>
    )
}

export default Home;