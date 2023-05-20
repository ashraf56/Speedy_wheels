import React from 'react';
import { Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const AllTOy = () => {
    let Toys=useLoaderData();

    return (
        <div >
            <h1 className='text-center' >Toys Galore: A Playground of Playthings</h1>
<div className='my-5 mx-5'>
<Table striped bordered hover size="sm">
      <thead className='bg-dark text-light text-center' >
        <tr >
        
          <th>#</th>
          <th >Seller </th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Available Quantity
</th>
          <th>Detail
</th>
        </tr>
      </thead>
      <tbody className='fw-semibold bg-warning bg-opacity-50 ' >
      {
Toys.map((toy,index)=>(

    <tr>
    <td style={{width:'50px',textAlign:'center'}}>{index+1}</td>
    <td style={{width:'80px'}} >{toy.seller}</td>
    <td>{toy.name}</td>
      <td style={{width:'100px'}}>{toy.subCategory}</td> 
    <td style={{width:'80px'}}>${toy.price}</td>
    <td>{toy.quantity}</td> 
    <td style={{width:'100px'}} > <button className='btn'>View Detail</button> </td> 
    
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