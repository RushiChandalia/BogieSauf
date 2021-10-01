import React, { useState } from 'react'
import "./formMobile.css"
import "./formDesktop.css"
import emailjs from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';


const Form = () => {
    const userId = emailjs.init("user_wwaczqPlUjet5shywSdV7");
    const [templateParams, settemplateParams] = useState({
        from_name: '',
        to_name: 'Bogie Sauf',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const handleSubmit = async() => {
        setLoading(true)
        const response =  await emailjs.send("service_65shn87", "template_qmklitw", templateParams, userId);
        if(response) setLoading(false)
        else console.log("failed")
    }
    return (
        <div className="form" >
            <div className="normal-inp">
                <input type="text" name="Name" id="form-name" placeholder="Name" onChange={(e)=> settemplateParams({
                    ...templateParams,
                    from_name:e.target.value
                })} />
                <input type="email" name="Email" id="form-email" placeholder="Email" />
                <input type="number" name="Number" id="form-number" placeholder="Number" />
                <input type="text" name="Address" id="form-address" placeholder="Address"  />
            </div>
            <textarea name="message" id="form-message" cols="30" rows="10" placeholder="Message" onChange={(e)=> settemplateParams({
                    ...templateParams,
                    message:e.target.value
                })} />
            <div className="form-radio">
                <span>
                    <input type="checkbox" id="Car" name="bogie-products" value="HTML" />
                    <label for="html">Car</label><br />
                </span>
                <span>
                    <input type="checkbox" id="Bike" name="bogie-products" value="Bike" />
                    <label for="Bike">HTML</label><br />
                </span>
                <span>
                    <input type="checkbox" id="Auto Rickshaw" name="bogie-products" value="Auto Rickshaw" />
                    <label for="html">Auto Rickshaw</label><br />
                </span>
                <span>
                    <input type="checkbox" id="Truck" name="bogie-products" value="Truck" />
                    <label for="html">Truck</label><br />
                </span>

            </div>
           
            <button type="submit" onClick={handleSubmit} className=" form-btn"> {loading ? <CircularProgress className="loader" color="primary" size={20}/> : "Submit"}</button>
        </div>
    )
}

export default Form
//emailjs.send("service_65shn87","template_qmklitw");