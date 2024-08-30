import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser';

function ContactSec({ formData, updateFormData, }) {

    const [Uemail, setUemail] = useState();

    useEffect(() => {
        setUemail(getCookie('email'))
    }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target

        updateFormData({
            contact: { ...formData.contact, [name]: value }
        });
    }
    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[90px] w-full h-full '>
                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between w-full'>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="mobileNumber" name='mobileNumber' onChange={handleInputChange} required />
                                        <label for="mobileNumber" className="label">Mobile Number</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="homeMobileNumber" name='homeMobileNumber' onChange={handleInputChange} required />
                                        <label for="homeMobileNumber" className="label">Home Number</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="email" name='email' value={Uemail} onChange={handleInputChange} required />
                                        <label for="email" className="label">Email Address</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default ContactSec
export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(ContactSec);
