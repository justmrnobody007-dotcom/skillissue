import Header from './header.jsx'
import Footer from './footer.jsx'
import Food   from  './food.jsx'

function App() {

  return(
    //jsx files should be wrapped in a fragment
    <>
  <Header />
  <Food />
  <Footer /> 

  </>
  );
  
}

export default App;