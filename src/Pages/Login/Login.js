import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imgl from "../../assets/images/log/istockphoto-1392441826-612x612.jpg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full my-20  ">
      <div className="hero-content gap-32 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left ">
          <img className="w-full h-full" src={imgl} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm w-ful bg-cyan-600 shadow-4xl bg-base-400">
          <h1 className="text-center text-3xl mt-10 font-bold text-slate-700">
            Log Into Your Account
          </h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered text-xl  "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered text-xl"
              />
              <label className="label text-2xl">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-2xl "
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-lg"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center p-5 text-lg">
            New to Wedding vendor ?
            <Link className="text-white text-bold p-2" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
