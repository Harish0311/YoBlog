import { useState } from "react"

export default function User(){
    const id = localStorage.getItem('id')
    console.log(id)
    
    const [name,setname]= useState('')
    const [color,setcolor]=useState('')

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
    return(
        <div>
        <h1>Welcome {name}</h1>
        </div>
    )
}