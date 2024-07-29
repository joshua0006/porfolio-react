const ChangeTheme = ({setTheme , setFont}) => {
    const fontStyle = {fontFamily: 'Cursive'};
    return ( 
        
        <div className="change-theme">
            <div className="color" style={fontStyle}>
                    <p>Change Color:</p>
                    <div>
                        <button onClick={() => setTheme("tomato")} className="tomato"></button>
                        <button onClick={() => setTheme("orange")} className="orange"></button>
                        <button onClick={() => setTheme("green")} className="green"></button>
                        <button onClick={() => setTheme("teal")} className="teal-blue"></button>
                    </div>
                </div> 
                <div className="font" style={fontStyle}>
                    <p>Change Font:</p>
                    <div>
                        <button onClick={() => setFont("Arial")}>1</button>
                        <button onClick={() => setFont("Serif")}>2</button>
                        <button onClick={() => setFont("Times")}>3</button>
                        <button onClick={() => setFont("Cursive")}>4</button>
                    </div>
                </div> 
        </div>
     );
}
 
export default ChangeTheme;