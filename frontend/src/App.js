import React, { useState } from "react";

function Counter(props) {
  // const hookOuput = useState(props.initialValue)
  // const myCount = hookOuput[0]
  // const setMyCount = hookOuput[1];
  const [myCount, setMyCount] = useState(props.initialValue)

  function increment() {
    if (props.reverse) {
      setMyCount(myCount - 1)
    } else {
      setMyCount(myCount + 1)
    }
  }

  return (
    <div>
      The counter is {myCount}
      <button onClick={increment}>{props.reverse ? "Decrement" : "Increment"}</button>
    </div>
  )
}

function App() {

  // return React.createElement(React.Fragment, {},
  //   React.createElement("h1", { className: "myTitle" }, "Hello"),
  //   React.createElement(Counter, {}, null),
  //   React.createElement(Counter, {}, null),
  //   React.createElement(Counter, {}, null)
  // )

  return (
    <>
      <h1 className="myTitle">Hello</h1>
      <Counter initialValue={12} />
      <Counter initialValue={15} reverse />
      <Counter initialValue={0} />
    </>
  )
}

export default App;