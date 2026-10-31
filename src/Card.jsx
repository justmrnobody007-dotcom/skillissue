import swampPic from './assets/shrek_swamp.jpg'

function Card(){

    return(
        <div className = "card">
            <img src={swampPic} alt="swamp's picture"></img>
            <h2>shrek's swamp</h2>
            <p>it is inside a jungle and shrek lives there</p>
        </div>
    );
}

export default Card;


//with jsx , class is a reserved keyword , so we write className 