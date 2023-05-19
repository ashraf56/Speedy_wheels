import React, { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Button, Form } from 'react-bootstrap';

const AddToy = () => {
    let {user}=useContext(ContextAuth)
    return (
        <div>
               <div className='w-50 mx-auto mb-5'>


<Form  >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User name</Form.Label>
    <Form.Control type="name" name='name' defaultValue={user?.displayName}   placeholder="Enter name"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User photo</Form.Label>
    <Form.Control type='url' name='photo'   placeholder="Enter photo url" defaultValue='https://img.icons8.com/?size=512&id=gYI9v0NbFgxC&format=png' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' defaultValue={user?.email} disabled  placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Already have an account? <Link to='/login' className='text-decoration-none text-dark' >Log in now</Link></Form.Label>
   

  </Form.Group>

  <Button variant="warning" className='w-100' type="submit">
    Register
  </Button>
  
</Form>

</div>
        </div>
    );
};

export default AddToy;