import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1> That page doesn't exist!</h1>
            <p>Sorry, the page you were looking for could not be found</p>
            <div className="not-found-body">
                <Link to="/home"> <button className="goHome-btn mb-5 "> Go Home</button></Link>
                <img src="https://i.stack.imgur.com/6M513.png" alt="" />
            </div>
            
    </div>
    );
};

export default NotFound;