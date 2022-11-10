import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const ReviewShow = ({ order, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, price, customer, phone, message } = order;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {user.photoURL ? (
                <div>
                  <img className="w-24 rounded" src={user.photoURL} alt="" />
                </div>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">{message}</button>
      </th>
    </tr>
  );
};

export default ReviewShow;
