import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddService = () => {
  const addService = useLoaderData();
  const { _id, title, img, price, description } = addService;
  const { user } = useContext(AuthContext);
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }
    fetch("https://y-theta-lyart.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="px-10">
      <form onSubmit={handleOrder}>
        <div className="card my-20 mx-auto md:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p className="text-xl text-orange-600">Price:{price}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="grid   grid-cols-1 lg:grid-cols-2 gap-6 mb-4 ">
          <input
            type="text"
            name="first"
            placeholder="First Name"
            className="input input-bordered  w-full border-stone-600"
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            className="input input-bordered  w-full border-stone-600"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full border-stone-600"
            required
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Your email"
            className="input input-bordered  w-full border-stone-600"
            readOnly
          />
        </div>
        <textarea
          className="textarea border border-stone-600 textarea-bordered h-24 w-full"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          className="btn btn-stone-600 text-center mx-auto mt-5 mb-20 rounded-xl"
          type="submit"
          value="Place Your order"
        />
      </form>
    </div>
  );
};

export default AddService;
