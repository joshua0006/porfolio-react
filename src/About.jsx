import AnimatedPage from "./AnimatedPage";
import ChangeTheme from "./ChangeTheme";
import "./css/about.css"

const About = ({setTheme}) => {
    const paragraphStyle = {
        whiteSpace: 'nowrap',
        marginBottom: '20px',
      };

    return ( 
        <AnimatedPage className="about-container">
            <div className="about">
                <div className="description">
                    <h2>about.</h2>
                    <p style={paragraphStyle}>I am a Front-end Developer based in Philippines.</p>
                    <p>I have enjoyed turning challenges to elegant and user-friendly designs.</p>
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