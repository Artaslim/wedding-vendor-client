import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, description, title } = service;
  return (
    <div className="card mx-auto md:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 150)}</p>
        <div className="card-actions">
          <Link to={`/addservice/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
