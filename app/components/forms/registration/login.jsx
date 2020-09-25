import React from "react";
import MyForm from "../myform.jsx";


class Login extends React.Component {
    render() {
        return (
            <MyForm title="Вход" linkTo="/registration" formLinkText="Нет аккаунта?" onClickHandler={()=>console.log("Регистрация!")}/>
        )
    }
}

export default  Login;