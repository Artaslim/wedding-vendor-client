import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-8 mt-20">
      <div className="text-center">
        <h2 className="text-4xl text-black ">Top Wedding Vendors</h2>
        <p className="font-semibold mt-5">
          Excepteur sint occaecat cupidatat non proident sunt
        </p>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
