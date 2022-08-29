// import "./OrderForm.css";
// import React, {useState} from 'react';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
//
//
// const Test = () => {
//
//     const [inputs, setInputs] = useState({
//         fullName: "",
//         email: "",
//         address: "",
//         phone: "",
//         city: "",
//         cardName: "",
//         cardNumber: "",
//         cardExp: "",
//         expYear: "",
//         cvv: ""
//     });
//
//     const changeHandle = e => {
//         setInputs({
//             ...inputs,
//             [e.target.name]: e.target.value
//         })
//     }
//
//     const submitHandle = e => {
//         e.preventDefault()
//         console.log(inputs)
//     }
//
//     return (
//
//         <div className="container">
//             <h1 className="form_title">Complete Your Order</h1>
//             <div className="input_form">
//                 <form onSubmit={submitHandle}>
//                     <div className="input_items">
//
//                         <h3>Enter Your Shipping Address</h3>
//                         {/* Name */}
//                         <div className="order_fullName">
//                             <label><PersonIcon className="icon_user"></PersonIcon>Full Name</label>
//                             <input type="text" name="fullName" value={inputs.fullName} onChange={changeHandle}/>
//                         </div>
//
//                         {/* Email */}
//                         <div className="order_email">
//                             <label><EmailIcon className="icon_email"></EmailIcon> Email</label>
//                             <input type="email" name="email" value={inputs.email} onChange={changeHandle}/>
//                         </div>
//
//                         {/* Address */}
//                         <div className="order_address">
//                             <label><HomeIcon className="icon_address"></HomeIcon> Address</label>
//                             <input type="address" name="address" value={inputs.address} onChange={changeHandle}/>
//                         </div>
//
//                         {/* Phone */}
//                         <div className="order_phone">
//                             <label><PhoneIcon className="icon_phone"></PhoneIcon> Phone</label>
//                             <input type="phone" name="phone" value={inputs.phone} onChange={changeHandle}/>
//                         </div>
//
//                         {/* City*/}
//                         <div className="order_city">
//                             <label><LocationCityIcon className="icon_city"></LocationCityIcon> City</label>
//                             <input type="city" name="city" value={inputs.city} onChange={changeHandle}/>
//                         </div>
//
//                     </div>
//
//
//                     {/*        Payment*/}
//                     <div className="payment_form">
//                         <h3 className="payment_title">Payment</h3>
//                         <label>Accepted Cards</label>
//                         <div className="cards_container">
//                             <p>Card number 1</p>
//                             <p>Card number 2</p>
//                             <p>Card number 3</p>
//                             <p>Card number 4</p>
//                         </div>
//
//                         <div className="cards_info">
//                             {/* Card Name */}
//                             <div className="card_name">
//                                 <label>Card Name</label>
//                                 <input type="cardName" name="cardName" value={inputs.cardName} onChange={changeHandle}/>
//                             </div>
//
//                             {/* Card Number */}
//                             <div className="card_number">
//                                 <label>Card Number</label>
//                                 <input type="cardNumber" name="cardNumber" value={inputs.cardNumber} onChange={changeHandle}/>
//                             </div>
//
//                             {/* Exp Month */}
//                             <div className="card_exp">
//                                 <label>Exp Month</label>
//                                 <input type="cardExp" name="cardExp" value={inputs.cardExp} onChange={changeHandle}/>
//                             </div>
//
//                             {/* Card details*/}
//                             <div className="card_details">
//                                 {/* Exp Year*/}
//                                 <div className="exp_year">
//                                     <label>Exp Year</label>
//                                     <input type="expYear" name="expYear" value={inputs.expYear} onChange={changeHandle}/>
//                                 </div>
//
//                                 {/*CVV*/}
//                                 <div className="card_cvv">
//                                     <label>CVV</label>
//                                     <input type="cvv" name="cvv" value={inputs.cvv} onChange={changeHandle}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="order_submitBtn">
//                         <button type="submit">Continue to checkout</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//     );
// }
//
// export default Test;
