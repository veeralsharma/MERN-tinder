import React, { useEffect, useState } from 'react'
import '../css/TinderCards.css'
import TINDERCARD from 'react-tinder-card'
import {AllUser} from "../api"

function TinderCard() {

    const [people,setPeople]=useState([])

    const [lastswiped,setLastSwiped] = useState({
        name:"",
        direction:""
    })

    useEffect(() => {
       async function getdata(){
           await AllUser().then((users) => {
               setPeople(users.message)
           }).catch(e => console.log(e)) 
       } 
       getdata()
    },[])

    const swiped = (direction,nameToDelete) => {
        
    }

    const outOfFrame = (name) => {
        
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TINDERCARD
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up" , "down"]}
                        onSwipe={(dir) => swiped(dir,person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    <div style={{backgroundImage:`url(${person.profile_pic})`}}
                        className="card"
                    >
                        <h3>{person.name} | {person.age}</h3>
                    </div>
                    </TINDERCARD>
                ))}
            </div>
        </div>
    )
}

export default TinderCard
