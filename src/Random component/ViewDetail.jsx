import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ViewDetail = () => {
    let viewtoy=useLoaderData()
    return (
        <div className='container mx-auto'>
            <div className='container ' >

            <h1 className='text-center text-uppercase fw-bold py-4' >VIEW TOY DETAILS</h1>
            <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-12">
      <div className="card-body fw-bold">
  <img src={viewtoy.url}className="img-fluid rounded-start" />
        <h5 className="card-title">Toy Name: {viewtoy.name}</h5>
        <p className="card-text "> price: ${viewtoy.price}</p>
        <p className="card-text">Seller:{viewtoy.seller}</p>
        <p className="card-text">Seller-Email: <mark>{viewtoy.email}</mark> </p>
        <p className="card-text"> Sub-Category: {viewtoy.subCategory}</p>
        <p className="card-text">Available Quantity: {viewtoy.quantity}</p>
        <p className="card-text align-item-center">Rating: <FaStar className='text-warning fs-5'/> {viewtoy.rating}</p>
        <p className="card-text">Description :{viewtoy.description}</p>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default ViewDetail;