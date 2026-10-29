

function Header(){

  return(
    //react component are only capable of returning a single element
    // u can place children element within 
    <header>
     <h1>My website</h1>
     <nav>
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">contact</a></li>

        <hr></hr>
      </ul>
     </nav>
    </header>
  )
}

export default Header