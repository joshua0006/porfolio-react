import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link } from 'react-router-dom';
import "./css/navbar.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {
    return ( 
        <nav className="nav">
            <Link onClick={() => window.location.reload(true)}><h1>Joshua</h1></Link>
            <div className="links">
                <Link id='home' to="/"><OtherHousesOutlinedIcon/> Home</Link>
                <Link id='about' to="/about"><PermIdentityOutlinedIcon/> About</Link>
                <Link id='skills' to="/skills"><PsychologyIcon/> Skills</Link>
                <Link id='projects' to="/projects"><HomeRepairServiceOutlinedIcon/> Projects</Link>
                <Link id='contact' to="/contact"><ContactPageIcon/> Contact</Link>
            </div>
            <div className='contact-me'>
            <Link className='contact-icon' to="https://www.facebook.com/joshuamagnase"><FacebookOutlinedIcon/></Link>
            <Link className='contact-icon' to="https://www.linkedin.com/in/albert-joshua-magnase-4597b2280/"><LinkedInIcon/></Link>
            </div>
        </nav>
     );
}
 
export default NavBar;
