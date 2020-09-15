import React from "react";

const Navbar = (props)=> {
    return(
        <div className='navbar'>
            <div className='leftBar'></div>
            <div className='rightBar'>
                <img className='infoButton' src=""></img>
                <div className='email'>{props.user.email}</div>
            </div>
        </div>
    )
}

export default Navbar;