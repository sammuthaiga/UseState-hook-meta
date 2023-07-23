import { useState } from "react";
function App() {
  const [restaurantName, setRestaurantName] =  useState("Lemon")
  const [greetings, setGreetings] = useState("Hello, World!");
  const [menu, setMenu] = useState("Loading...")
  // console.log(restaurantName)
  const [bot, setBot] = useState({answer1:"We are currently on holiday!"});

function updateRestaurantName () {
  setRestaurantName("Little lemon")
}
function updateGreetings () {
  setGreetings("Welcome to Little Lemon! Our most modern restaurant!")
}

function updateMenu () {
  setMenu("Hi! Chill and enjoy coffee as we work on it!")
}

function updateBot () {
  const newBot = {...bot};
  newBot.answer1 = "Come back 5minutes later!";
  setBot(newBot); 

}
  return (
    <div>
          <h1>{restaurantName}</h1>
          <button onClick={updateRestaurantName}>Updated Restaurant Name</button>
          <h1>{greetings}</h1>
          <button onClick={updateGreetings}>Learn more</button>
          <h1>{menu}</h1>
          <button onClick={updateMenu}>Checkout our Menu!!!</button>
          <h1>{bot.answer1}</h1>
          <button onClick={updateBot}>Chat With Us!!</button>
    </div>
  );
}

export default App;
