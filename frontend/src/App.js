import React, { useState } from "react";
import Post from "./components/Post";
import getRandomColor from "./components/getRandomColor";


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
    if(inputValue!= ""&& textValue != ""){
    const newPost = { input: inputValue, text: textValue ,color: getRandomColor()};
    setPostedContent(prevContent => [...prevContent, newPost])}
    else if (inputValue==""){
      alert("Please type your name before posting!!!")
    }
    else if (textValue==""){
      alert("Please type something before posting!!!")
    }
  

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
        // <Posting key={index} input={post.input} text={post.text} />
        <Post key={index} input={post.input} text={post.text} color = {post.color}/>
      ))}
    </>
  )
}

export default App;