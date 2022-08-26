import "./OrderForm.css";
import React, {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Aexpress from '../paymentCards/americanexpress.png';
import Cirrus from '../paymentCards/cirrus.png';
import Maestro from '../paymentCards/maestro.png';
import Visa from '../paymentCards/visa.png';


const OrderForm = () => {



    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        cardName: "",
        cardNumber: "",
        cardExp: "",
        expYear: "",
        cvv: ""
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
            <h1 className="form_title">Complete Your Order</h1>
            <div className="input_form">
                <form onSubmit={submitHandle}>
                    <div className="input_items">

                        <h3>Enter Your Shipping Address</h3>
                        {/* Name */}
                        <div className="order_fullName">
                            <div className="input_title">
                                <PersonIcon className="icon_user"></PersonIcon>
                                <label>Full Name</label>
                            </div>
                            <input type="text" name="fullName" value={inputs.fullName} placeholder="John M. Smith"
                                   onChange={changeHandle}/>
                        </div>

                        {/* Email */}
                        <div className="order_email">
                            <div className="input_title">
                                <EmailIcon className="icon_email"></EmailIcon>
                                <label>Email</label>
                            </div>
                            <input type="email" name="email" value={inputs.email} placeholder="john@example.com"
                                   onChange={changeHandle}/>
                        </div>

                        {/* Address */}
                        <div className="order_address">
                            <div className="input_title">
                                <HomeIcon className="icon_address"></HomeIcon>
                                <label>Address</label>
                            </div>
                            <input type="address" name="address" value={inputs.address} placeholder="542 W. 15th Street"
                                   onChange={changeHandle}/>
                        </div>

                        {/* City*/}
                        <div className="order_city">
                            <div className="input_title">
                                <LocationCityIcon className="icon_city"></LocationCityIcon>
                                <label>City</label>
                            </div>
                            <input type="city" name="city" value={inputs.city} placeholder="New York"
                                   onChange={changeHandle}/>
                        </div>
                    </div>


                    {/*        Payment*/}
                    <div className="payment_form">
                        <h3>Payment</h3>
                        <div className="cards_container">
                            <h4>Accepted Cards</h4>
                            <div className="cards">
                                <img src={Aexpress} alt="americanexpress"/>
                                <img src={Cirrus} alt="cirrus"/>
                                <img src={Maestro} alt="maestro"/>
                                <img src={Visa} alt="visa"/>
                            </div>

                        </div>

                        <div className="cards_info">
                            {/* Card Name */}
                            <div className="card_name">
                                <label>Name on Card</label>
                                <input type="cardName" name="cardName" value={inputs.cardName}
                                       placeholder="John Mer Smith" onChange={changeHandle}/>
                            </div>

                            {/* Card Number */}
                            <div className="card_number">
                                <label>Card Number</label>
                                <input type="cardNumber" name="cardNumber" value={inputs.cardNumber}
                                       placeholder="111-222-333-444" onChange={changeHandle}/>
                            </div>

                            {/* Exp Month */}
                            <div className="card_exp">
                                <label>Exp Month</label>
                                <input type="cardExp" name="cardExp" value={inputs.cardExp} placeholder="March"
                                       onChange={changeHandle}/>
                            </div>

                            {/* Card details*/}
                            {/*<div className="card_details">*/}
                            {/*    /!* Exp Year*!/*/}
                            {/*    <div className="exp_year">*/}
                            {/*        <label>Exp Year</label>*/}
                            {/*        <input type="expYear" name="expYear" value={inputs.expYear} placeholder="2024" onChange={changeHandle}/>*/}
                            {/*    </div>*/}

                            {/*    /!*CVV*!/*/}
                            {/*    <div className="card_cvv">*/}
                            {/*        <label>CVV</label>*/}
                            {/*        <input type="cvv" name="cvv" value={inputs.cvv} placeholder="752" onChange={changeHandle}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="order_submitBtn">
                        <button type="submit">Continue to checkout</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderForm;
