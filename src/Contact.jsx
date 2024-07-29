import AnimatedPage from "./AnimatedPage";
import "./css/contact.css";
import ChangeTheme from './ChangeTheme';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = ({setTheme}) => {

  function sendEmail(e) {
    e.preventDefault();   
    emailjs.sendForm('service_afo7r7j', 'template_ld4qvbd', e.target, 'DJmyssNF3pLrG-GDM')
      .then((error) => {
        console.log(error.text);
      });
  }

  return ( 
    <AnimatedPage>
      <div className="contact">
        <p className="header">Get in touch with me via social media or email.</p>
        <div className="social-media">
          <Link to="https://www.facebook.com/joshuamagnase" target="_blank">
          <FacebookIcon className="icon"/> <p>facebook</p>
          </Link>
          <Link to="https://www.linkedin.com/in/albert-joshua-magnase-4597b2280/" target="_blank">
          <LinkedInIcon className="icon"/> <p>Linked-in</p>
          </Link>
        </div>
        <ChangeTheme setTheme={setTheme}/>
        <form className="contact-form" onSubmit={sendEmail}>
          <div>
            <input type="hidden" name="contact_number" />
            <label for="email">Email</label>
            <input id="email" type="email" name="from_email" />
            <label for="subject">Subject</label>
            <input id="subject" type="text" name="subject" />
          </div>
          <div>
          <label for="message">Message</label>
          <textarea id="message" name="html_message" rows="10" cols="70" />
          <input type="submit" className="submit-button" value="Send" />
          </div>
          
        </form>
      </div>
    </AnimatedPage>
   );
}
 
export default Contact;