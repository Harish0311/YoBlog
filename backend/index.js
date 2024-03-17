const express = require("express");
const bodyParser= require("body-parser");
const cors = require('cors');
var mysql = require('mysql2');
const app= express()
app.use(bodyParser.json())
app.use(cors());
// var post =[{input: "Harish", text: "Hello there! ", color: "#ff0000",postId: "abcd"}]
var post;
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'YoBlog',
    password: 'H@rish123'
});

app.get('/post',(req,res)=>{
    pool.query('SELECT * FROM Card_Data', (err, results, fields) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        post = results;
        // console.log('Query results:', results);
        res.json(post)

    });
    // res.json(post)
    // console.log("Backend gave the data",post)
});

app.post('/post',(req,res)=>{
    
    const RecievedPost =req.body
    pool.query('INSERT INTO Card_Data SET ?', RecievedPost, (err, results) => {
        if (err) {
            console.error('Error inserting row:', err);
            return;
        }
        console.log('New row inserted with ID:', results.insertId);
    });
    // post.unshift(RecievedPost)
    res.json("Successfully Received thanks!")
})

app.patch('/post',(req,res)=>{
    const RecievedChangesPost =req.body
    const NeedChange = post.find(content => content.postId=== RecievedChangesPost.postId)
    pool.query('UPDATE Card_Data SET text = ? WHERE postId = ?',[RecievedChangesPost.text,RecievedChangesPost.postId])
    NeedChange.text=RecievedChangesPost.text
    res.json("got it thanks!!")
})

app.delete('/post',(req,res)=>{
    const PostIdtoDelete =req.query.postId

    pool.query('DELETE FROM Card_Data WHERE postId = ?',PostIdtoDelete,(err,results)=>{
        if (err) {
            console.error('Error deleting row:', err);
            return;
        }
        console.log('New row inserted with ID:', results.insertId);
    })
    // post = post.filter(Id=> Id.postId !== PostIdtoDelete)
    res.json("RIP")
})


app.listen(2000)


