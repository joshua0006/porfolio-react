import "./css/projects.css";
const Projects = ({setTheme}) => {
    return ( 
        <div className="projects">
            <div    className="projects-list" 
                    style={{ 
                        '--width': '200px',
                        '--height': '200px',
                        '--quantity': 5
                     }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}>
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                    <div className="item" style={{ '--position': 2 }}>
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                    <div className="item" style={{ '--position': 3 }}>
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                    <div className="item" style={{ '--position': 4 }}>
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                    <div className="item" style={{ '--position': 4 }}>
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                        
                   
                </div>
            </div>
        </div>
     );
}
 
export default Projects;