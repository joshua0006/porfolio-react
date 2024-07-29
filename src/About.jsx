import AnimatedPage from "./AnimatedPage";
import ChangeTheme from "./ChangeTheme";
import "./css/about.css"

const About = ({setTheme}) => {
    
    return ( 
        <AnimatedPage className="about-container">
            <div className="about">
                <div className="description">
                    <h2>about.</h2>
                    <p>Born in 2000 in the Philippines, I am passionate about making web design more diverse and inspiring. With a mission is to explore and showcase the endless possibilities within the field, driven by continuous experimentation and thoughtful innovation.</p>
                </div>
                <div className="my-picture">
                    <div className="vertical1"></div>
                    <div className="horizontal1"></div>
                    <div className="vertical2"></div>
                    <div className="horizontal2"></div>
                </div>
                <ChangeTheme setTheme={setTheme}/>   
            </div>
             
        </AnimatedPage>
     );
}
 
export default About;