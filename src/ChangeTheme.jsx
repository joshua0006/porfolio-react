import { useState } from "react";

const ChangeTheme = ({setTheme , setFont}) => {
    const fontStyle = {
        fontFamily: 'Kanit'
    }
    
    return ( 
        
        <div className="change-theme">
            <div className="color" >
                    <p style={fontStyle}>Change Color:</p>
                    <div>
                        <button onClick={() => setTheme("tomato")} className="tomato"></button>
                        <button onClick={() => setTheme("orange")} className="orange"></button>
                        <button onClick={() => setTheme("green")} className="green"></button>
                        <button onClick={() => setTheme("teal")} className="teal-blue"></button>
                    </div>
                </div> 
                <div className="font">
                    <p style={fontStyle}>Change Font:</p>
                    <div>
                        <button className="font-color" 
                                onClick={() => setFont("Kanit")} 
                                style={fontStyle}>1</button>
                        <button className="font-color" 
                                onClick={() => setFont("Serif")} 
                                style={fontStyle}>2</button>
                        <button className="font-color" 
                                onClick={() => setFont("Times")} 
                                style={fontStyle}>3</button>
                        <button className="font-color" 
                                onClick={() => setFont("Cursive")} 
                                style={fontStyle}>4</button>
                    </div>
                </div> 
        </div>
     );
}
 
export default ChangeTheme;