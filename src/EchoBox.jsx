import { useState } from 'react';

function EchoBox(){
    const[text,setText] = useState("");
    return(
        
        <div className = "EchoBox">
            <label className="echoText">type your stuff here:</label>
            <input 
            type = "text"
            value = {text} 
            onChange = {(e) => setText(e.target.value)}
            />
            
            <h2 className = "echoText">{text}</h2>
        </div>
        
    );
}

export default EchoBox
