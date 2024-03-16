const express = require("express");
const bodyParser= require("body-parser");
const cors = require('cors');

const app= express()
app.use(bodyParser.json())
app.use(cors());
var post =[{input: "Harish", text: "Hello there! ", color: "#ff0000",postId: "abcd"}]

app.get('/post',(req,res)=>{
    res.json(post)
})

app.post('/post',(req,res)=>{
    
    const RecievedPost =req.body
    post.unshift(RecievedPost)
    res.json("Successfully Received thanks!")
})

app.patch('/post',(req,res)=>{
    const RecievedChangesPost =req.body
    const NeedChange = post.find(content => content.postId=== RecievedChangesPost.postId)
    NeedChange.text=RecievedChangesPost.text
    res.json("got it thanks!!")
})

app.delete('/post',(req,res)=>{
    const PostIdtoDelete =req.query.postId
    post = post.filter(Id=> Id.postId !== PostIdtoDelete)
    res.json("RIP")
})


app.listen(2000)


