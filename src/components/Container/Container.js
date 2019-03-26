import React from 'react';

function Container(props) {
    return (
        <div className="ui center aligned container">
        {props.children}
        </div>
    )
}

export default Container;