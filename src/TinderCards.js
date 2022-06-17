import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, SetPeople] = useState([
    {
        name:"Sachin",
        url:"https://cdn.pixabay.com/photo/2020/12/16/06/13/sachin-tendulkar-5835753_960_720.png"
    },
    {
        name:"satya Nadella",
        url:"https://cdn.geekwire.com/wp-content/uploads/2014/01/nadella.png"
    },
    {
      name: "MSD",
      url:
        "https://cdn.pixabay.com/photo/2020/12/16/06/01/mahendra-singh-dhoni-5835730__340.png"
    },
    {
      name: "Virat",
      url:
        "https://cdn.pixabay.com/photo/2020/12/16/06/08/virat-kohli-5835741__340.png"
    },
    
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tindercards cardContent">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;