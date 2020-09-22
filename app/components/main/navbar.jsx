import React from "react";
import infoButton from "../../images/infoButton.png";
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
                <div className="info">
                    <div className="addTag infoIcon"></div>
                    <span>Добавить запись</span>
                    <br></br>
                    <div className="searchIcon infoIcon"></div>
                    <span>Поиск по названию</span>
                </div>
                <img className='deleteButton' onClick={props.deleteNote} src={deleteButton} ></img>
                <div className='email'>{props.user.email}</div>
            </div>
        </div>
    )
}

export default Navbar;