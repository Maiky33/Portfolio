import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import { BiLogoLinkedinSquare,BiLogoInstagramAlt,BiLogoGithub} from "react-icons/bi";
import "./css/ContactMe.css"

const ContactMe = () => {

  const formRef = useRef(null);
  const [dataerror, setdataerror] = useState([]) 
  const [datasend, setdatasend] = useState(false) 

  const sendEmail = (e) => {
    e.preventDefault();
    setdatasend(true)

    const form = formRef?.current;

    const requiredFields = {
      user_name: form?.user_name?.value,
      user_email: form?.user_email?.value,
      message: form?.message?.value
    };
    setdataerror(requiredFields)


    let errorData = []

    for (let field in requiredFields) {
      if (!requiredFields[field]) {
        errorData.push({name:field})
      }
    }

    if(errorData.length){
      return
    }

    emailjs
      .sendForm('service_nbg4iqr', 'template_3258r75', formRef?.current, {
        publicKey: 'vgd_Wl_35Lk7nY7e0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );

    form?.reset();
  };

  return ( 
    <div id="ContactMe" className="ContactMe"> 
      <h2 className="ContactMeTitle">Contact Me</h2>


      <div className='formContactMeContainer'> 
        <form className='formImputsContainer' ref={formRef} onSubmit={sendEmail}>
          {!dataerror.user_name && datasend?<p>missing field</p>: null}
          <input placeholder='Name' className='formImputContactMe' type="text" name="user_name" />
          {!dataerror.user_email && datasend?<p>missing field</p>: null}
          <input placeholder='Email' className='formImputContactMe' type="email" name="user_email" />
          {!dataerror.message && datasend?<p>missing field</p>: null}
          <textarea placeholder='Message' className='formTextareaContactMe' name="message" />
          <input className='buttonSendFromContactMe' type="submit" value="Send" />
        </form>

        <img draggable={false} className='AboutGif' alt='imagen' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5saHF6cW1lOGp3dW83Zmt5cDZiYWNza3Y5azc1ZmdpeGxodXM0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiN0GCrD3iqO4CRZm/giphy.webp"/>

      </div>

      <div className="linksContacMe"> 
        <p>
          <BiLogoLinkedinSquare />
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maicol-jessi-barrera-gonzalez-90b1581b4/">Linkedin</a>
        </p>

        <p>
          <BiLogoGithub />
          <a rel="noreferrer" target="_blank" href="https://github.com/Maiky33">GitHub</a>
        </p>

        <p>
          <BiLogoInstagramAlt/>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/1maiky_3/">Instagram</a>
        </p>
      </div>
    </div>
  )
}

export default ContactMe;