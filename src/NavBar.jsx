import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link } from 'react-router-dom';
import "./css/navbar.css"

const NavBar = () => {
    return ( 
        <nav className="nav">
            <Link onClick={() => window.location.reload(true)}><h1>Site</h1></Link>
            <div className="links">
                <Link id='home' to="/"><OtherHousesOutlinedIcon/> Home</Link>
                <Link id='about' to="/about"><PermIdentityOutlinedIcon/> About</Link>
                <Link id='skills' to="/skills"><PsychologyIcon/> Skills</Link>
                <Link id='projects' to="/projects"><HomeRepairServiceOutlinedIcon/> Projects</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;
