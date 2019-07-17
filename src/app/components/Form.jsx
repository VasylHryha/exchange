import React from "react";


function Form() {
    return (
        <form className="signup-form mdc-theme--dark">
            <div className="mdc-textfield">
                <input type="text" name="firstname" className="mdc-textfield_input" placeholder="Ім'я" />
            </div>
        </form>
    );
}

export default Form;