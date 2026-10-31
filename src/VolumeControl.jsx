import { useState } from 'react';

function  Volumecontrol(){
    
    const [volume , setVolume] = useState(50)

    return(
        <>
        <div className = "Volume">
        <h1>volume</h1>
        <p className = "volume-display">{volume}</p>
        <button onClick={() => setVolume(prevVolume => Math.min(prevVolume + 10, 100))}>+</button>
        <button onClick={() => setVolume(prevVolume => Math.max(prevVolume - 10, 0))}>-</button>
        </div>
        </>
    );
}

export default Volumecontrol 



//react needs a specific signal  to know your data has changed so it can refresh the UI
//useState is that signal 
// it gives your component a memory 
