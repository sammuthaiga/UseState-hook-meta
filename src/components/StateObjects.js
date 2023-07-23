import React from "react";

function GoalForm (props) {
  const[formData, setFormData] = React.useState({name: "", goal: "", by: ""});

  function ChangeHandler (e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  
  }

  function submitHandler (e) {
    e.preventDefault();
    props.onAdd(formData)
    setFormData({name:"", goal: "", by: "",})
  }

  return (
    <>
    <h1>My little Lemon Restaurant Goals</h1>
    <form onSubmit={submitHandler}>
      <input 
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={ChangeHandler}
      />
      <input
      type="text"
      name="goal"
      placeholder="Goal"
      value={formData.goal}
      onChange={ChangeHandler}
      />
      <input 
      type="text"
      name="by"
      placeholder="By..."
      value={formData.by}
      onChange={ChangeHandler}
      />
      <button>Submit Your Goal</button>

    </form>
    </>
  )
}

function ListOfGoals (props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>Hello, I am {g.name} and my goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const[allGoals, updateAllGoals] = React.useState([])
  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  )
}

export default App