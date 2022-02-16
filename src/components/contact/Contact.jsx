import React, { useRef, useState ,useContext} from 'react'
import "./contact.css"
import Phone from "../../image/phone.png"
import Email from "../../image/email.png"
import Address from "../../image/address.png"
import emailjs from 'emailjs-com';
import {ThemeContext} from "../../context"


const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const [done,setDone] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_83wrs8q', 'template_mijccea', formRef.current, 'user_qkASy3oCn1ShPZrfYpqx0')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            
        }, (error) => {
            console.log(error.text);
        });
    

    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets Discuss Your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                            +1 13131 99999
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className='c-icon' />
                            ananthu.venugopal@urolime.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className='c-icon' />
                            Kochi ,India 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
            collaboration if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{backgroundColor:darkMode&&"#333"}} type="text" placeholder='Name' name='user_name' />{' '}
                        <input style={{backgroundColor:darkMode&&"#333"}} type="text" placeholder='Subject' name='user_subject' />{' '}
                        <input style={{backgroundColor:darkMode&&"#333"}} type="text" placeholder='Email' name='user_email' />{' '}
                        <textarea style={{backgroundColor:darkMode&&"#333"}} name="message" rows="5" placeholder='message'></textarea>{' '}
                        <button>Submit</button>
                        {done && "Thank you "}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact