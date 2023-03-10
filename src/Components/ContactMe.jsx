import { BiCopyright } from "react-icons/bi";
import "./css/ContactMe.css"

const ContactMe = () => {

  return ( 
    <div id="ContactMe" className="ContactMe"> 
      <h2 className="ContactMeTitle">Contact Me</h2>
      <p><a href="mailto:maicolbarrerag@gmail.com">Gmail</a></p>
      <p><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maicol-jessi-barrera-gonzalez-90b1581b4/">Linkedin</a></p>
      <p><a rel="noreferrer" target="_blank" href="https://github.com/Maiky33">GitHub</a></p>
      <p><a rel="noreferrer" target="_blank" href="https://www.instagram.com/1maiky_3/">Instagram</a></p>
      <BiCopyright className="CopyIcon"/>
      <p className="Author_p">©Se Reservan Derechos De Autor</p>
    </div>
  )
}

export default ContactMe;