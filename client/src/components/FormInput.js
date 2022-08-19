import React from 'react';
import "./FormInput.css";


function FormInput(props) {
    return (
        <div className="form_input">
            <div className="input_items">
                {/*<label>User Name</label>*/}
                <input placeholder={props.placeholder} />
            </div>
        </div>
    );
}

export default FormInput;