import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewShow from "./ReviewShow";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://y-theta-lyart.vercel.app/orders?email=${user?.email}`, {})
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are want to cancel your reviews");
    if (proceed) {
      fetch(`https://y-theta-lyart.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>{orders.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ReviewShow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></ReviewShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
