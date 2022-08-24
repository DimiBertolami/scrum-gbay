import "./OrderForm.css";
import {useState} from "react";

function OrderForm(props) {
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    console.log(firstName);


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you enter was ${firstName}`);
    }

    return (
        <div className="form_input">
            <h1 className="order_title">Order Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type="text"
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default OrderForm;