import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegistered } from 'react-icons/fa';

import './header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-info">
            <a className="navbar-brand text-white" href="#">BOOK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 order-3 mt-2" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/feed" className="nav-link text-white">Feed</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/people" className="nav-link text-white">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link text-white">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-white"><FaRegistered className="icon-static" /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export {
    Header
};