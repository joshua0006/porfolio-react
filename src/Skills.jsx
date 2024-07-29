import AnimatedPage from "./AnimatedPage";
import ChangeTheme from "./ChangeTheme";
import cssImg from './img/skills/css.png';
import htmlImg from './img/skills/html.png';
import jsImg from './img/skills/js.png';
import reactImg from './img/skills/react.png';
import viteImg from './img/skills/vite.png';
import "./css/skills.css"

const Skills = ({setTheme , setFont}) => {

    return ( 
        <AnimatedPage>
        <div className="skills-container">
            <div className="skills">
                <div className="skill">
                    <div className="skill-name">HTML</div>
                    <div className="skill-bar">
                    <div className="skill-per" style={{ maxWidth: '75%' }} per="75%"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                    <div className="skill-per" style={{ maxWidth: '80%' }} per="80%"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">Javascript</div>
                    <div className="skill-bar">
                    <div className="skill-per" style={{ maxWidth: '85%' }} per="85%"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">React</div>
                    <div className="skill-bar">
                    <div className="skill-per" style={{ maxWidth: '85%', }} per="85%"></div>
                    </div>
                </div>
            </div>
               
            <div className="skills-slides">
            <div className="slider" style={{ '--quantity': 5 }}>
                <div className="item" style={{ '--position': 1 }}>
                    <img src={cssImg} alt="" />
                </div>
                <div className="item" style={{ '--position': 2 }}>
                    <img src={htmlImg} alt="" />
                </div>
                <div className="item" style={{ '--position': 3 }}>
                    <img src={reactImg} alt="" />
                </div>
                <div className="item" style={{ '--position': 4 }}>
                    <img src={viteImg} alt="" />
                </div>
                <div className="item" style={{ '--position': 5 }}>
                    <img src={jsImg} alt="" />
                </div>
            </div>
        </div>
        <ChangeTheme setTheme={setTheme} setFont={setFont}/>
            </div> 
            
        </AnimatedPage>
     );
}
 
export default Skills;