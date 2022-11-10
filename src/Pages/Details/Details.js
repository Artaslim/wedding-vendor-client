import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/Home/Shared/ServiceCard/ServiceCard";

const Details = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Details;
