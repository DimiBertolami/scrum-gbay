// import React, { useState } from 'react';
//
// const Test = () => {
//
//     const [inputs, setInputs] = useState({
//         name: "",
//         email: "",
//         address: "",
//         phone: "",
//         password: ""
//     })
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
//         <form onSubmit={submitHandle}>
//             <input type="text" name="name" value={inputs.name} onChange={changeHandle} />
//             <input type="email" name="email" value={inputs.email} onChange={changeHandle} />
//             <input type="address" name="address" value={inputs.address} onChange={changeHandle} />
//             <input type="phone" name="phone" value={inputs.phone} onChange={changeHandle} />
//             <input type="password" name="password" value={inputs.password} onChange={changeHandle} />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
//
// export default Test;