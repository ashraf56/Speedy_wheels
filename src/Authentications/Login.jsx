import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';

const Login = () => {
    let {user,google}=useContext(ContextAuth)
let signIndata=e=>{
    e.preventDefault();
    let F=e.target;
  let name=F.name.value;
  let url=F.photo.value;
  let email=F.email.value;
  let password=F.password.value;

}
let Gsignin=()=>{
    google()
    .then((result) => {
      const user = result.user;
    console.log(user);
    
    }).catch((error) => {
      const errorMessage = error.message;
    console.log(errorMessage);
    });
}

    return (
        <div className='my-5'>
            <h1>Log in now</h1>
          

            <div className='w-50 mx-auto mb-5'>


<Form onSubmit={signIndata} >

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email'   placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Don't have an account? <Link to='/signup' className='text-decoration-none text-dark' >Sign up</Link></Form.Label>
   

  </Form.Group>

  <Button variant="warning" className='w-100' type="submit">
    Submit
  </Button>
  
</Form>
<Button variant="light" onClick={Gsignin} className='w-100 mt-2' type="submit">
    Google log in
  </Button>
</div>
        </div>
    );
};

export default Login;