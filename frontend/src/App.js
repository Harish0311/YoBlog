import React, { useState } from "react";
import Post from "./components/Post";
import getRandomColor from "./components/getRandomColor";
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Button, Container } from "@mui/material";
import PrimarySearchAppBar from "./components/Appbar";


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
    if (inputValue != "" && textValue != "") {
      const newPost = { input: inputValue, text: textValue, color: getRandomColor() };
      setPostedContent(prevContent => [...prevContent, newPost])
    }
    else if (inputValue == "") {
      alert("Please type your name before posting!!!")
    }
    else if (textValue == "") {
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
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <Container>


<br></br>
<br></br>

      <Typography variant="h3" gutterBottom color="primary">
        Welcome!
      </Typography>



      <form>
        <TextField placeholder="Eg.Harish" color="primary"
          InputProps={{
            style: { backgroundColor: 'white' }
          }} label="Name" value={inputValue} onChange={handleInputChange} />
        <br /><br />
        <div>
          <TextField multiline rows={4}
            InputProps={{
              style: { backgroundColor: 'white' }
            }}  placeholder="Say something..." label="Content" value={textValue} onChange={handleTextChange} /></div>
      </form>
      <br />
      <br />
      <div>

        <Button variant="contained" onClick={handleButtonClick} endIcon={<SendIcon />}>
          Post
        </Button>
      </div>
      <br />
      <br />
      {/* <Counter initialValue={12} />
      <Counter initialValue={15} reverse />
      <Counter initialValue={0} /> */}

      {postedContent.map((post, index) => (
      
        // <Posting key={index} input={post.input} text={post.text} />
        <div>
        <Post key={index} input={post.input} text={post.text} color={post.color} />
        <br/>
        </div>
              ))}
              
    </Container>
    </>
  )
}

export default App;