import Header from './header.jsx'
import Footer from './footer.jsx'
import Food   from  './food.jsx'
import Card   from   './Card.jsx'
import Volumecontrol from './useState.jsx';
function App() {

  return(
    //jsx files should be wrapped in a fragment
    <>
  <Header />
  <Food />
  <Footer /> 
  <Card />
  <Volumecontrol />

  </>
  );
  
}

export default App;