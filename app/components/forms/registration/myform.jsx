import React from "React";

const MyForm = (props)=> {
    return(
        <div className="formContainer">
            <div><h1>{props.title}</h1></div>
            <div className="form">
                <input placeholder="Email"></input>
                <input placeholder="Пароль"></input>
                <button className="formButton" onClick={props.onClickHandler}></button>
            </div>
        </div>
    )
}

export default MyForm;