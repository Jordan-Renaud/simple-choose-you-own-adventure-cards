import "./App.css";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";

const storyMap = [
  {
    text: "You arrive at a crossroad.",
    option1: { text: "Go Left", leadsTo: 1 },
    option2: { text: "Go Right", leadsTo: 2 },
  },
  {
    text: "You see a chest on the ground",
    option1: { text: "Open it", leadsTo: 3 },
    option2: { text: "Go Back", leadsTo: 0 },
  },
  {
    text: "A monster eats you. The end.",
    option1: { text: "Try again", leadsTo: 0 },
  },
  {
    text: "You found the treasure. The end.",
    option1: { text: "Try again", leadsTo: 0 },
  },
];

function App() {
  const [storyIndex, setStoryIndex] = useState(0);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="App">
      <TinderCard
        className="card"
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
        <p className="card-text">{storyMap[storyIndex].text}</p>
      </TinderCard>
    </div>
  );
}

export default App;
