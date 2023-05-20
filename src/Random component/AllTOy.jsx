import React from 'react';
import { Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const AllTOy = () => {
    let Toys=useLoaderData();

    return (
        <div >
            <h1>ALL TOY {Toys.length}</h1>
<div className='my-5 mx-5'>
<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {
Toys.map((toy,index)=>(

    <tr>
    <td>{index+1}</td>
    <td>{toy.name}</td>
    <td>${toy.price}</td>
    <td>{toy.seller}</td>
    <td>{toy.subCategory}</td> 
    <td>{toy.quantity}</td> 
    <td className='text-center' > <img src={toy.url} className='w-25' />  </td>
  </tr>

))

      }
    
      </tbody>
    </Table>
</div>
        </div>
    );
};

export default AllTOy;