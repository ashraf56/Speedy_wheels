import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='my-5'>
            <h1>Log in now</h1>
          

<div className='w-50 mx-auto mb-5'>


    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   {...register("email")}  placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password")} placeholder="Password" required />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> <Link to='/signup' className='text-decoration-none text-dark' >Register now</Link></Form.Label>
       

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

export default Login;