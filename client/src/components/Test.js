import "./OrderForm.css";
import React, {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';


const Test = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        city: ""
    });

    const changeHandle = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitHandle = e => {
        e.preventDefault()
        console.log(inputs)
    }

    return (

        <div className="container">
            <h1>Complete Your Order</h1>
            <div className="input_form">

                <form className="order_items" onSubmit={submitHandle}>
                    <h3>Enter Your Shipping Address</h3>
                    {/* Name */}
                    <div className="order_fullName">
                        <label><PersonIcon className="icon_user"></PersonIcon>Full Name</label>
                        <input type="text" name="fullName" value={inputs.fullName} onChange={changeHandle}/>
                    </div>


                    {/* Email */}
                    <div className="order_email">
                        <label><EmailIcon className="icon_email"></EmailIcon> Email</label>
                        <input type="email" name="email" value={inputs.email} onChange={changeHandle}/>
                    </div>


                    {/* Address */}
                    <div className="order_address">
                        <label><HomeIcon className="icon_address"></HomeIcon> Address</label>
                        <input type="address" name="address" value={inputs.address} onChange={changeHandle}/>
                    </div>


                    {/* Phone */}
                    <div className="order_phone">
                        <label><PhoneIcon className="icon_phone"></PhoneIcon> Phone</label>
                        <input type="phone" name="phone" value={inputs.phone} onChange={changeHandle}/>
                    </div>

                    {/* City*/}
                    <div className="order_city">
                        <label><LocationCityIcon className="icon_city"></LocationCityIcon> City</label>
                        <input type="city" name="city" value={inputs.city} onChange={changeHandle}/>
                    </div>

                    <div className="order_submitBtn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>


            {/*        Payment*/}
            <div className="payment_form">

            </div>
        </div>
    );
}

export default Test;
