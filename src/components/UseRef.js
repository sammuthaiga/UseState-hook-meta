import React from "react";

function App () {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
<>
<h1>Using useRef to access undelying DOM</h1>
<input ref={formInputRef} type="text"/>
<button onClick={focusInput}>Focus Input</button>
</>    
  )
}

export default App;