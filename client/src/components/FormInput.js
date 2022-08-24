import "./FormInput.css";
import {useState} from "react";

function FormInput(props) {
    const [usernameContact, setUsernameContact] = useState('');
    const [userPostContact, setPostContact] = useState('');


    return (
        <div className="form_input">
                <h1>Contact details</h1>
            <label>Name</label>
            <input type="text"
                   onChange={(event) => {
                       setUsernameContact(event.target.value)}}/>
            <label>Post code</label>
            <input type="number"  onChange={(event) => {
                setPostContact(event.target.value)}}/>
            <label>Phone number</label>
            <input type="number"/>
            <button className="btn">Save</button>
        </div>
    );
}

export default FormInput;