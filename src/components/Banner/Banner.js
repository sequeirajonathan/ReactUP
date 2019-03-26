import React from 'react';
import './Banner.css';

function Banner (props) {
    return(
        <div className="ui inverted vertical center aligned segment banner">
        {props.children}
        </div>
    )
}

export default Banner;