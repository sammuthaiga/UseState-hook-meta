const Button = ({children, backgroundColor}) => {
  return (
    <button style={backgroundColor}>{children}</button>
  )
};

const Alert = ({ children }) => {
  return (<>
   <div className="overlay" />
    <div className="Alert">{children}</div>
  </> 
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

function App () {
return (
  <div className="App">
    <header>Little Lemon</header>
    <Alert>
      <h2>Delete account</h2>
      <p>Delete your account and miss all the goodies!!!</p>
      <DeleteButton />
    </Alert>
  </div>
)
}

export default App;