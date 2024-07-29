
import { Typewriter} from 'react-simple-typewriter';
import AnimatedPage from './AnimatedPage';
import ChangeTheme from './ChangeTheme';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import "./css/home.css"

const Home = ({ setTheme , setFont }) => {

    const paragraphStyle = {
        whiteSpace: 'nowrap',
        marginBottom: '20px',
      };

    
    return (
        <AnimatedPage>
            <div className="Home">
                
                <div className="home-rotating">
                        
                        <div className="product">
                            <div className="soda bg1"></div>
                            <div className="soda bg2"></div>
                            <p>Hover me <ArrowDown/></p>
                        </div>
                </div>
                <div className="home-description">
                    <h2>Hello I am <span>Joshua</span></h2>
                    <p>I am <span><Typewriter
                        words={['Developer.', 'Designer.', 'Creative.', 'Detail Oriented.']}
                        loop={true}
                        cursor
                        cursorStyle='_'
         
                    /></span></p>
                    <p style={paragraphStyle}>I am a Front-end Developer based in Philippines.</p>
                    <p>I have enjoyed turning challenges to elegant and user-friendly designs.</p>
                    <Link to="/about"><button >Learn About me</button></Link>
                </div>
                <ChangeTheme setTheme={setTheme} setFont={setFont}/>
            </div>
        </AnimatedPage>
    );
}

 
export default Home;