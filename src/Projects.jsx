import "./css/projects.css";
import digitalClock from "./img/projects/Digital-Clock.png";
import pricingComponent from  "./img/projects/Pricing-Component.png";
import quoteGenerator from  "./img/projects/Quote-Generator.png";
import signupForm from  "./img/projects/Signup-Form.png";
import goodsWebsite from "./img/projects/US-Goods-Website.png";
import weatherApp from  "./img/projects/Weather-App.png";
import ChangeTheme from "./ChangeTheme";
import { Link } from "react-router-dom";

const Projects = ({setTheme}) => {
    return ( 
        <div className="projects">
            <div    className="projects-list" 
                    style={{ 
                        '--width': '650px',
                        '--height': '450px',
                        '--quantity': 6
                     }}>
                <div className="list">
                    <Link>
                        <div className="item" style={{ '--position': 1 }}>
                            <img src={digitalClock} alt="Digital Clock"/>
                            <p className="title">Digital Clock</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="item" style={{ '--position': 2 }}>
                            <img src={pricingComponent} alt="Pricing Component"/>
                            <p className="title">Pricing Component</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="item" style={{ '--position': 3 }}>
                            <img src={quoteGenerator} alt="Quote Generator"/>
                            <p className="title">Quote Generator</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="item" style={{ '--position': 4 }}>
                            <img src={signupForm} alt="Signup Form"/>
                            <p className="title">Signup Form</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="item" style={{ '--position': 5 }}>
                            <img src={goodsWebsite} alt="Goods Website"/>
                            <p className="title">Goods Website</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="item" style={{ '--position': 6 }}>
                            <img src={weatherApp} alt="Weather App"/>
                            <p className="title">Weather App</p>
                        </div>
                    </Link>
                </div>
            </div>
            <ChangeTheme setTheme={setTheme}/>
        </div>
     );
}
 
export default Projects;