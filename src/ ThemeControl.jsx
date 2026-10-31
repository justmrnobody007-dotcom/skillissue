import {useState} from 'react';

function ThemeController(){
    const[settings, setSettings] = useState({
        volume:50,
        theme:"light"
    });

    return (
   <div className={`theme ${settings.theme}`}>
      <p>Volume: {settings.volume}</p>
      <p>Theme: {settings.theme}</p>

      <button
        onClick={() =>
          setSettings(prev => ({
            ...prev,
            theme: "dark"
          }))
        }
      >
        Change theme
      </button>

      <button
        onClick={() =>
          setSettings(prev => ({
            ...prev,
            volume: 70
          }))
        }
      >
        Change volume
      </button>

      <button onClick={() => setSettings(prev => ({volume:50
                                                   ,theme:"light"}))}>reset</button>
    </div>
  );

}

export default ThemeController 