import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {IoMdCall} from 'react-icons/io'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import styled from 'styled-components'
import { BiLogoLinkedin } from 'react-icons/bi';
import emailjs from 'emailjs-com';
export default function Footer() {
  const [formData , setFormData] = useState({name:'' , email:'', message:''})


  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS user ID
    const userId = 'nNvZOtFkxD453sPlL'; 

    // Your EmailJS template ID
    // const templateId = 'template_lho9wpl';
    const templateId = 'template_x2v5oaw';

    emailjs.send('service_q62vdjj', templateId, {
    // emailjs.send('service_658eryj', templateId, {
      to_email: formData.email,
      message: formData.message,
    }, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form fields
        setFormData({name:'' , email:'', message:''})
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };

  console.log('formData -- ',formData)

  return (
    <Root>
      <div className='container'>
         <div className='content_section'>
            <h1 className='background_title'>Let's Talk</h1>
            <h2 className='title'>Let's Talk</h2>
            <h2>Are you Hiring ? Lets Talk</h2>
            <div className='details_section'>
              <div>
                <div className='contact_form'>
                    <input type='text'  placeholder='Full Name' value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
                    <input type='email'  placeholder='Your Email Id ' value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/>
                    <textarea rows="4" cols="50" placeholder='Any Message' value={formData.message} onChange={(e)=>{setFormData({...formData,message:e.target.value})}}></textarea>
                </div>
                <button className='submitForm' onClick={sendEmail}>Submit</button>
              </div>
              <div className='contact_details'>
              <Link to='#' onClick={(e) => {window.location.href = 'tel:8580649110';e.preventDefault();}}><IoMdCall/>8580649110</Link>
              <Link to='#' onClick={(e) => {window.location.href = 'mailto:arun7807224868@gmail.com';e.preventDefault();}}><MdOutlineAlternateEmail/>arun7807224868@gmail.com</Link>
              <Link to='#' onClick={(e) => {window.location.href = 'https://www.linkedin.com/in/arun-kumar-16010b153/';}}><BiLogoLinkedin/>arun-kumar-16010b153</Link>
              </div>
            </div>
            
            <span className='smile'>(^.^)</span>
            <p>Thanks for scrolling, that’s all folks.</p>
         </div>
        
    </div>
    </Root>
  )
}
const Root = styled.div`

.container{
  position:relative;
  margin-bottom:50px;
}
.content_section{
  max-width: 90%;
  margin: auto;
  >span ,   p{
    display:block;
    text-align:center;
  }
  >span{
    color:#4FFFA0;
    font-size:20px;
  }
}
.submitForm {
  padding: 14px 24px;
  background: #24262d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: rgb(118 118 118 / 12%) 0px 2px 0px 0px, rgb(169 169 169 / 32%) 0px 2px 4px 0px;
  cursor: pointer;
}


.background_title {
    font-family: 'Roboto', sans-serif;
    font-size: 288px;
    font-weight:700;
    color:#ffffff0a;
    position:absolute;
    top:0px;
    z-index:-1;
}
h2.title {
    padding-top: 215px;
    font-family: 'Roboto', sans-serif;
    font-size:64px;
    font-weight: 400;
}

.details_section{
  margin-top:40px;
  display:flex;
  >div{
    flex:1;
  }
  .contact_form{
    
    *{
      display:block;
      background:#24262D;
      border:none;
      box-shadow: rgb(118 118 118 / 12%) 0px 2px 0px 0px, rgb(169 169 169 / 32%) 0px 2px 4px 0px;
      padding:20px;
      width:100%;
      margin:10px 0px;
      border-radius:4px;
      color:#fff;
      font-size:18px;
    }
  }
  .contact_details{
    a{
      color:#fff;
      display:block;
      width:100%;
      background-color:#24262D;
      box-shadow: rgb(255 255 255 / 12%) 0px 2px 4px 0px, rgb(169 169 169 / 32%) 0px 2px 16px 0px;
      border-radius:50px;
      margin:20px;
      padding:10px;
      display:flex;
      align-items:center;
      gap:14px;
      text-decoration:none;
      font-size:20px;
      svg{
        font-size:50px;
        background:#31333D;
        border-radius:50%;
        padding:6px;
        animation: pulse 2s infinite;
        color:#4FFFA0;
      }
    }
    @keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(101,101,101, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(101,101,101, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(101,101,101, 0);
  }
}
  }
}
`
