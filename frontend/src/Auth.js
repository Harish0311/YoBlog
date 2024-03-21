import { Button, Container, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom'


function Auth() {
    const [username,setusername]= useState("");
    const [password,setpassword]=useState("");
    let navigate = useNavigate();

    const handlelogin=()=>{

        fetch('http://localhost:2000/auth/login', {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name: username,
                password: password
            })
        })
        .then(response=> response.json())
        .then(post=>{

            if (post === "No such user exists!"){
                   return alert('Invalid username')
            }
            else if(post === "Wrong Password!"){
                return alert('Invalid password')
         }
         else{
 
            localStorage.setItem('id',post.id)
            navigate('/home')
         }

        }).catch(error => {
            console.error("Error:", error);

        });
    }
    const handlesignin=()=>{
        fetch('http://localhost:2000/auth/create',{
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: username,
                password
            }
            )
        }).then(response=>response.json())
        .then(post=>{
            return alert(post)
        })
    }
    const handlenamechange=(event)=>{
        setusername(event.target.value)
    }

    const handlepasswordchange=(event)=>{
        setpassword(event.target.value)
    }

    return (
        <>
            <br />
            <br />
            <Container>
                <Typography variant="h3" gutterBottom color="primary">
                    Welcome!
                </Typography>

                <br />
                <br />
                <TextField
                    id="outlined-name-input"
                    label="Name"
                    value={username}
                    onChange={handlenamechange}
                    InputProps={{
                        style: { backgroundColor: 'white' }
                    }}


                />
                <br />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value ={password}
                    onChange={handlepasswordchange}
                    InputProps={{
                        style: { backgroundColor: 'white' }
                    }}

                />
                <br />
                <br />
                <Button variant="contained"
                        onClick={handlelogin}>Login</Button>
                {"  "}
                <Button variant="outlined"
                    onClick={handlesignin}
                    style={{ backgroundColor: 'white' }}>Sign up</Button>
                <br/>
                <br/>
                <div>
                <Link to="/home" onClick={()=>{localStorage.removeItem('id')}}> Use as Guest</Link>
                </div>
                    
            </Container>
        </>

    )

}

export default Auth;