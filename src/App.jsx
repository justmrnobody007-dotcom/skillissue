import Header from './header.jsx'
import Footer from './footer.jsx'
import Food   from  './food.jsx'
import Card   from   './Card.jsx'
function App() {

  return(
    //jsx files should be wrapped in a fragment
    <>
  <Header />
  <Food />
  <Footer /> 
  <Card />

  </>
  );
  
}

export default App;