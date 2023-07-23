import { useState } from "react";
function App() {
  const [restaurantName, setRestaurantName] =  useState("Lemon")
  const [greetings, setGreetings] = useState("Hello, World!");
  const [menu, setMenu] = useState("Loading...")
  const [bot, setBot] = useState({answer1:"We are currently on holiday!"});
  const [help, setHelp] = useState({
    response1:"We are here to help!",
    response2: "Kindly Register with us today!!!"
  })
  const [order, setOrder] = useState({
    order1: "Chocolate Cake",
    order2: "Ice Cream"
  })

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

function updateHelp() {
  setHelp(prevState => {
    return{...prevState, response2: "Kindly Login to continue!!!"};
  })
}

function updateOrder () {
  setOrder(prevState => {
    return{...prevState, order2: "Tiramisu"};
  })
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
          <h1>{help.response1} {help.response2}</h1>
          <button onClick={updateHelp}>!!! HELP !!!</button>
          <h1>{order.order1}, {order.order2}</h1>
          <button onClick={updateOrder}>Review possible orders for today</button>
    </div>
  );
}

export default App;
