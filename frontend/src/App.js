import React, { useState } from "react";
import Counter from './Counter';
// import Posting from "./Posting";

function Posting({Input,Text}) {

  return (
    
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h2>{Input} says {Text}</h2>

      </div>
    );

}

function App() {
const [InputValue,setInputValue]= useState();
const [TextValue,setTextValue] = useState();
const [postedContent, setPostedContent] = useState([]);

const handleInputChange = (event) =>{
  setInputValue(event.target.value)
}
const handleTextChange = (event) =>{
  setTextValue(event.target.value)
}

const handleButtonClick = () =>{
  const newPost = { input: InputValue,text: TextValue };
  setPostedContent(PrevContent => [...PrevContent,newPost])
  
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
        <input placeholder="Name" value={InputValue} onChange={handleInputChange}/>
        <textarea placeholder="Say something..." value={TextValue} onChange={handleTextChange} />
      </form>
      <div>
        <button onClick={handleButtonClick}>Post</button>
      </div>
      <Counter initialValue={12} />
      <Counter initialValue={15} reverse />
      <Counter initialValue={0} />

      {postedContent.map((post, index) => (
        <Posting key={index} Input={post.input} Text={post.text} />
      ))}
    </>
  )
}

export default App;