import { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);
  
  return(
    <div>
        <p>the lights are switched {isOn ? "ON" : "OFF"}.</p>
        <button onClick = {() => setIsOn(!isOn)}>
            {!isOn ? "switch-on" : "switch-off"}
        </button>
    </div>
  );
}

export default LightSwitch;