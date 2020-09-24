import React from "react";
import MyForm from "./myform.jsx";


class Registration extends React.Component {
    render() {
        return (
            <MyForm title="Регистрация" onClickHandler={()=>console.log("Регистрация!")}/>
        )
    }
}

export default Registration;