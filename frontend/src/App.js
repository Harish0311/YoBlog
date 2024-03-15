import React, { useState } from "react";

function Posting({ input, text }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{input} says {text}</h2>
    </div>
  );

}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [postedContent, setPostedContent] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleTextChange = (event) => {
    setTextValue(event.target.value)
  }

  const handleButtonClick = () => {
    const newPost = { input: inputValue, text: textValue };
    setPostedContent(prevContent => [...prevContent, newPost])

  }


  // return React.createElement(React.Fragment, {},
  //   React.createElement("h1", { className: "myTitle" }, "Hello"),
  //   React.createElement(Counter, {}, null),
  //   React.createElement(Counter, {}, null),
  //   React.createElement(Counter, {}, null)
  // )

  return (
    <>

      <h1 className="myTitle">Hello</h1>

      <form>
        <input placeholder="Name" value={inputValue} onChange={handleInputChange} />
        <textarea placeholder="Say something..." value={textValue} onChange={handleTextChange} />
      </form>
      <div>
        <button onClick={handleButtonClick}>Post</button>
      </div>
      {/* <Counter initialValue={12} />
      <Counter initialValue={15} reverse />
      <Counter initialValue={0} /> */}

      {postedContent.map((post, index) => (
        <Posting key={index} input={post.input} text={post.text} />
      ))}
    </>
  )
}

export default App;