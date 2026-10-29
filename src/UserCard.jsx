import { useState , useEffect } from 'react';



function UserCard(props){

    const[isFollowing, setIsfollowing] = useState(false);
    return(
        <div>
            <h2>username:{props.name}</h2>
            <button onClick = {() => setIsfollowing(!isFollowing)}>
                {isFollowing ? "following" : "follow"}
            </button>
        </div>
    );
}



function UserList(){

    const [showUsers, setShowUsers] = useState(false);
    const [users , setUsers] = useState([]);//usestate ke andar ek empty array hai

     useEffect(() => {
            console.log("fetching data...");
            setUsers(["Bhakti", "Mummy", "Didi", "Nevan"]);
        },[]);

    return(
        <div>
            <button onClick ={()=> setShowUsers(true)}>show usernames</button>
        {showUsers &&(
        <ul>
             {users.map((array, index) => (
              <UserCard key={index} name={array} />
             ))} 
        </ul>)
}
        </div>
       
    );
    
}


export default UserList;
