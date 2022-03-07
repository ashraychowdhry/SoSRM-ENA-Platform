import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

export default function ContactForm() {

    const {register, handleSubmit, errors} = useForm();

    const [successMsg, setSuccessMsg] = useState("");

    function onSubmit(contents, reset) {
        sendEmail(service_id, template_id, 
            {
                name: contents.name,
                phone: contents.phone,
                email: contents.email,
                subject: contents.subject,
                description: contents.description
            }, user_id)

            reset.target.reset()
    }



    const service_id = 'service_75cbvzi';
    const template_id = 'template_tukd94i';
    const user_id = 'user_rBKrRQEqck72wbvOk9dWy';
    function sendEmail(service_id, template_id, variables, user_id) {
        emailjs.send(service_id, template_id, variables, user_id)
          .then(() => {
              setSuccessMsg("Success! I'll get back to you shortly");
          }).catch(error => console.log(`Error submitting form :  ${error}`));
      }


    return (
        <div id='contacts' className='contacts main-font'>
            <div className='text-center'>

                <h1>Contact Me!</h1>
                <p>Please fill out the form below, and I'll get back to you ASAP!</p>

                <span className='success-msg main-font'>{successMsg}</span>
            
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <input className='form-control' placeholder='name' name='name' type='text' id='name'
                            ref={
                                register({
                                    required: "Name required",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter 20 or less characters"
                                }
                                })
                            }
                            />
                            <div className='line'></div>
                            <span className='error-msg'>
                                {errors.name && errors.name.message}
                            </span>
                            <input className='form-control' placeholder='phone' name='phone' type='text' id='phone'
                            ref={
                                register({
                                    required: "Phone number required",
                                })
                            }
                            />
                            <div className='line'></div>
                            <span className='error-msg'>
                                {errors.phone && errors.phone.message}
                            </span>
                            <input className='form-control' placeholder='email' name='email' type='email' id='email'
                            ref={
                                register({
                                    required: "Email required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid Email'

                                    }
                                })
                            }
                            />
                            <div className='line'></div>
                            <span className='error-msg'>
                                {errors.email && errors.email.message}
                            </span>
                            <input className='form-control' placeholder='subject' name='subject' type='text' id='subject'
                            
                            ref={
                                register({
                                    required: "Subject required",
                                })
                            }
                            />
                            <div className='line'></div>
                            <span className='error-msg'>
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>

                        <div className='col-md-6 col-xs-12'>
                            <textarea className='form-control' placeholder='Description' name='description' type='text' id='description'
                            ref={
                                register({
                                    required: "Description required",
                                })
                            }
                            >
                            </textarea>
                                <div className='line'></div>
                            <span className='error-msg'>
                                {errors.description && errors.description.message}
                            </span>

                        </div>
                    </div>
                    <button className='get-started-button contact-btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
