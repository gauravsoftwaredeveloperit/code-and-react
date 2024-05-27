import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15

  const addValue = () => {
    // counter=counter+1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  };
  // use in if - else condition
  // let result
  // if (counter >= 20 ) {
  //    result = 'postive'
  //    console.log(counter=20);
  // }
  // else{
  //   result = 'negative'
  // }

  // let countervalue =15;

  const removevalue = () => {
    setCounter(counter - 1);
  };

  // use in if - else condition
  //   if (counter <= 0 ) {
  //     result = 'postive'
  //     console.log(counter=20);
  //  }
  //  else{
  //    result = 'negative'
  //  }

  return (
    <>
      <h1>code and react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
