import React from 'react'

import './Menu.css';

function Menu(props) {




    return (
        <a href={props.Address}>
            <div>
                {props.Content}
            </div>
        </a>
    )
}

export default Menu