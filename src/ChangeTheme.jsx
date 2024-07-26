const ChangeTheme = ({setTheme}) => {
    return ( 
        <div className="change-theme">
                    <p>Change Theme:</p>
                    <div>
                        <button onClick={() => setTheme("tomato")} className="tomato"></button>
                        <button onClick={() => setTheme("orange")} className="orange"></button>
                        <button onClick={() => setTheme("green")} className="green"></button>
                        <button onClick={() => setTheme("teal")} className="teal-blue"></button>
                    </div>
                </div> 
     );
}
 
export default ChangeTheme;