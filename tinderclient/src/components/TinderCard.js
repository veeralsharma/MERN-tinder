import React, { useState } from 'react'
import '../css/TinderCards.css'
import TINDERCARD from 'react-tinder-card'

function TinderCard() {

    const [people,setPeople]=useState([
        {
            name:"Rachel Green",
            url:"https://tvline.com/wp-content/uploads/2019/06/friends-rachel.jpg?w=620"
        },
        {
            name:"Monica Geller",
            url:"https://i.insider.com/5c8279ebeb3ce821ef1247a2?width=1100&format=jpeg&auto=webp"
        }
    ])

    const swiped = (direction,nameToDelete) => {
        console.log(`${nameToDelete} left screen`);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`);
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
                    <div style={{backgroundImage:`url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                    </TINDERCARD>
                ))}
            </div>
        </div>
    )
}

export default TinderCard
