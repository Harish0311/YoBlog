const express = require("express");
const bodyParser= require("body-parser");
const cors = require('cors');
var mysql = require('mysql2');
const app= express()
const fs = require('fs');
const { log } = require("console");

function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Construct the RGB color string
    return `rgb(${r},${g},${b})`;
  }

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
const sqlquery =fs.readFileSync('../sql/fetch-posts.sql','utf8')

// Test the connection
// pool.query('SELECT * FROM Card_Data', (err, results, fields) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     post = results;
//     // console.log('Query results:', results);
// });

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


app.post('/auth/create',(req,res)=>{
    const {name,password}= req.body
    pool.query('SELECT * FROM users WHERE name = ?',name,(err,results)=>{
        if (err) {
            console.log(err);
            return res.status(400).json("Unable to process query!")
            
        }
        if(results.length<1){
                pool.query('INSERT INTO users (name, password, color) VALUES (?, ?, ?)', [name,password, getRandomColor()], (err) => {
                    console.log(err);
                })
                // send success response
                res.json("User Successfully Created")
        }else {
            return res.status(400).json("User already exists");
            // send user already exist response with 400 status
        }
    })
    
})

app.post('/auth/login',(req,res)=>{
    const {name,password}=req.body
    pool.query('SELECT * FROM users WHERE name = ?',name,(err,results)=>{
        
        if (err) {
            console.log(name,password,err);
            return res.status(400).json("Unable to process query!")
        }
        if(results.length<1){
            return res.status(400).json("No such user exists!")
        }
        else{
            if(results[0].password===password){
                return res.json({id: results[0].id })
            }
            else{
                return res.status(400).json("Wrong Password!")
            }
            
        }
    })
})

app.post('/auth/verify',(req,res)=>{
    const id=parseInt(req.body.id)
    console.log(id)
    pool.query('SELECT * FROM users WHERE id = ?',id,(err,results)=>{
        if(results.length<1){
            return res.status(400).json("Invalid user")
        }
        else{
            return res.json({name: results[0].name,color: results[0].color})
        }
    })
})

app.get('/auth/login',(req,res)=>{
    const id= parseInt(req.body.id)
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }
    pool.query('SELECT name,color FROM users WHERE id = ?',id,(err,results)=>{
        return res.json({name: results.name,color: results.color})
    })
})

app.listen(2000)


