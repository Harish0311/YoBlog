import { useState } from "react"

export default function User(){
    const id = localStorage.getItem('id')
    
    const [name,setname]= useState('')
    const [color,setcolor]=useState('')

    fetch('http://localhost:2000/auth/login')
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