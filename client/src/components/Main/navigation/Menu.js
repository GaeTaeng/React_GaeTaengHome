import React from 'react'

import './Menu.css';


function Menu(props) {
    //props.onClickNav();
    //여기서 STATE를 만들고
    const {CheckMenu, Address, Content} = props;
    console.log("HI");
    return (
        <button onClick = {() => CheckMenu(Content)}>
                <div>
                    {Content}
                </div>
                {Address !== '/'? () => window.open(Address) : ""}
                
        </button>
    )
}

export default Menu