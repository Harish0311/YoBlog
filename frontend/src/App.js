import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import getRandomColor from "./components/getRandomColor";
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Button, Container } from "@mui/material";
import {useDispatch,useSelector} from 'react-redux'
import { addPost,addBulkPost } from "./store/action";

import { v4 as uuidv4 } from 'uuid';


function App() {
  //New Stuff
  const id = localStorage.getItem('id')
  console.log(id)
  const dispatch = useDispatch()
  
  
  const [name,setname]= useState('')
  const [color,setcolor]=useState('')
  const [isloggedin,setisloggedin]= useState(false)

  useEffect(()=>{
  if (id !== null){
  fetch('http://localhost:2000/auth/verify',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          id
      })
  })
  .then(response=>response.json())
  .then(post=>{
      console.log(post)
      setname(post.name)
      setcolor(post.color)
  })
  setisloggedin(true)
}


  fetch('http://localhost:2000/post')
    .then(response=>response.json())
    .then(post =>{
      dispatch(addBulkPost(post))
    })
},[id,dispatch]
  )


// New Stuff
  
  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  // const [postedContent, setPostedContent] = useState([]);
  const postedContent= useSelector(state => state.postReducer.postedContent);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleTextChange = (event) => {
    setTextValue(event.target.value)
  }


  const handleButtonClick = () => {
    if (inputValue !== "" && textValue !== "") {
      const newPost = { input: inputValue, text: textValue, color: getRandomColor(),postId: uuidv4() };
      // setPostedContent(prevContent => [...prevContent, newPost])
      dispatch(addPost(newPost))
      fetch('http://localhost:2000/post',{
        method: "POST",
        body: JSON.stringify(newPost),
        headers:{
          "Content-Type": "application/json"
        }
      })
    }
    else if (inputValue === "") {
      alert("Please type your name before posting!!!")
    }
    else if (textValue === "") {
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
    
    <Container>


<br></br>
<br></br>

      <Typography variant="h3" gutterBottom color="primary">
        Welcome {isloggedin ? `back, ${name}!` : "to our website!"}
      </Typography>



      <form>
        {!isloggedin && <TextField placeholder="Eg.Harish" color="primary"
          InputProps={{
            style: { backgroundColor: 'white' }
          }} label="Name" value={inputValue} onChange={handleInputChange} />}
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

      {postedContent.map(post => (
      
        // <Posting key={index} input={post.input} text={post.text} />
        <div  key={post.postId}>
        <Post input={post.input} text={post.text} color={post.color} postId={post.postId}  />
        <br/>
        </div>
              ))}
              
    </Container>
    </>
  )
}

export default App;