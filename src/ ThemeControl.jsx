import {useState} from 'react';

function ThemeController(){
    const[settings, setSettings] = useState({
        theme:"light"
    });

    return (
   <div className={`theme ${settings.theme}`}>
      <p>Theme: {settings.theme}</p>

      <button
        onClick={() =>
          setSettings(prev => ({
            ...prev,
            theme: prev.theme === "light" ? "dark" : "light"
          }))
        }
      >
        toggle theme
      </button>

      <button onClick={() => setSettings(prev => ({theme:"light"}))}>reset</button>
    </div>
  );

}

export default ThemeController 