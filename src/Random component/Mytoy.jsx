import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mytoy = () => {
let {user}=useContext(ContextAuth)
let [mytoys,setmytoy]=useState([])

let url=`https://b7a11-toy-marketplace-server-three.vercel.app/mytoy?email=${user?.email}`
useEffect(()=>{
fetch(url)
.then(res=> res.json())
.then(data=> {
    setmytoy(data)
})




},[mytoys])

let deletetoy=id=>{

fetch(`https://b7a11-toy-marketplace-server-three.vercel.app/alltoy/${id}`, {
  method:"DELETE",
}) .then(res=> res.json())
.then(data=>{
console.log(data);

})

}



    return (
        <div >
  <h1 className='text-center' >My Toys</h1>

    <div className='my-5 mx-5'>
<Table striped bordered hover size="sm">
      <thead className='bg-dark text-light text-center' >
        <tr >
        
          <th>#</th>
          <th>Photo url</th>
          <th >Seller </th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Available Quantity
</th>
          <th>Rating
</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody className='fw-semibold bg-warning bg-opacity-50 ' >
      {
mytoys.map((toy,index)=>(

    <tr>
    <td style={{width:'50px',textAlign:'center'}}>{index+1}</td>
    <td>
      <img src={toy.url} style={{width:'220px',}} />
    </td>
    <td style={{width:'80px'}} >{toy.seller}</td>
    <td>{toy.name}</td>
      <td style={{width:'100px'}}>{toy.subCategory}</td> 
    <td style={{width:'80px'}}>${toy.price}</td>
    <td>{toy.quantity}</td> 
    <td>{toy.rating}</td> 
    <td>{toy.description}</td> 

      <td style={{width:'100px'}} > <Link to={`/update/${toy._id}`} ><button className='btn my-5' >Update</button></Link>  </td> 
      <td style={{width:'100px'}} > <button className='btn my-5' onClick={()=>deletetoy(toy._id)} >Delete</button> </td> 
  </tr>

))

      }
    
      </tbody>
    </Table>
</div> 
        </div>
    );
};

export default Mytoy;