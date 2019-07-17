import React from "react";

import { Link } from "react-router-dom";


class Registration extends React.Component {
    handleClick = () => {
              }
    render() {
        return (
<div class="wrapper clearfix wrapperForm">

<div id="filter" onClick={this.handleClick=()=>(show('none'))}></div>
    <div class="form fadeIn" id="modalForm">
    <form encType="text/plain">
        <div class="logInForm">
            <div class="inputForm icon">
                <input type="text" name="username" id="username" placeholder="Ім'я"/>
                </div>
                <div class="inputForm icon">
                    <input type="text" name="surname" id="surname" placeholder="Прізвище"/>
                    </div>
                    <div class="inputForm icon">
                        <input type="password" name="password" id="password" placeholder="Пароль"/>
                    </div>
                    <div class="inputForm icon">
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Підтвердіть пароль"/>
                    </div>
                    <div class="inputForm icon">
                        <input type="text" name="emailAdres" id="emailAdres" placeholder="Вкажіть ваш email"/>
                    </div>
                    <div class="registrationUser">
                        <Link to="/login" id="registrationUserButton" onClick={this.handleClick=()=>(show('block'))}>Зареєструватись</Link>
                        
                    </div>

                </div>
    </form>
    
</div>



</div>

        );
    }
}



export default Registration;
