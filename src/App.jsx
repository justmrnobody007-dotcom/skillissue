import Header from './header.jsx'
import Footer from './footer.jsx'
import Food   from  './food.jsx'
import Card   from   './Card.jsx'
import Volumecontrol from './VolumeControl.jsx';
import EchoBox  from './EchoBox.jsx';
import ThemeController from './ ThemeControl.jsx';
function App() {

  return(
    //jsx files should be wrapped in a fragment
    <>
  <Header />
  <Food />
  <Footer /> 
  <Card />
  <Volumecontrol />
  <EchoBox />
  <ThemeController />
  </>
  );
  
}

export default App;