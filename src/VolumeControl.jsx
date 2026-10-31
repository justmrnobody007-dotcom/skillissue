import { useState } from 'react';

function  Volumecontrol(){
    
    const [volume , setVolume] = useState(50)

    return(
        <>
        <div className = "Volume">
        <h1>volume</h1>
        <p className = "volume-display">{volume}</p>
        <button onClick={() => setVolume(prevVolume => prevVolume +10)}>+</button>
        <button onClick={() => setVolume(prevVolume => prevVolume - 10)}>-</button>
        </div>
        </>
    );
}

export default Volumecontrol 



//react needs a specific signal  to know your data has changed so it can refresh the UI
//useState is that signal 
// it gives your component a memory 
