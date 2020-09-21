import React from "react";
import infoButton from "../../images/infoButton.png";
import timeButton from "../../images/timeButton.png";
import deleteButton from "../../images/deleteButton.png";

const Navbar = (props)=> {
    return(
        <div className='grid bar navbar'>
            <div className='leftBar'>
                <div className="searchIcon"></div>
                <input className="searchInput" onInput={props.onSearchInputHandler}></input>
            </div>
            <div className='rightBar'>
                <img className='infoButton' onClick={()=>console.log('info!')} src={infoButton}></img>
                <img className='timeButton' onClick={()=>console.log('time!')} src={timeButton} ></img>
                <img className='deleteButton' onClick={props.deleteNote} src={deleteButton} ></img>
                <div className='email'>{props.user.email}</div>
            </div>
        </div>
    )
}

export default Navbar;