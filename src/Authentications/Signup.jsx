import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';

const Signup = () => {
let {user,Createuser}=useContext(ContextAuth)

let registerdata=(e)=>{
  e.preventDefault();
  let F=e.target;
let name=F.name.value;
let url=F.photo.value;
let email=F.email.value;
let password=F.password.value;
console.log(name ,url ,email,password);

Createuser(email,password)
.then((userCredential) => {
    const user = userCredential.user;
   console.log(user);
  })
  .catch((error) => {
    const errorMessage = error.message;
   console.log(errorMessage);
  });

F.reset();
}


    return (
        <div  style={{height:'100%'}}>
            <div className='w-50 mx-auto mb-5'>


<Form onSubmit={registerdata} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User name</Form.Label>
    <Form.Control type="name" name='name'    placeholder="Enter name"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User photo</Form.Label>
    <Form.Control type='text' name='photo'   placeholder="Enter photo url" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email'   placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Already have an account? <Link to='/login' className='text-decoration-none text-dark' >Log in now</Link></Form.Label>
   

  </Form.Group>

  <Button variant="warning" className='w-100' type="submit">
    Submit
  </Button>
  
</Form>
<Button variant="light" className='w-100 mt-2' type="submit">
    Google log in
  </Button>
</div>
        </div>
    );
};

export default Signup;