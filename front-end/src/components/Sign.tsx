import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface propsdata {
  text?: string;
}

export default function Sign({ text }: { text: propsdata }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  

  const handleLogin = async () => {
    try {
      setLoader(true);
      const response = await axios.post(
        `${BACKEND_URL}user/api/v1/signin`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("user",JSON.stringify(response.data.existingUser));
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Incorrect credentials. Please check your email or password.");
      } else {
        setError("An error occurred during login. Please try again later.");
      }
    } finally {
      setLoader(false);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}user/api/v1/signup`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("user",JSON.stringify(response.data.user));
        navigate("/");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        setError("This email is already associated with an account.");
      } else {
        setError("An error occurred during registration. Please try again.");
      }
    }
  };

  const handleClose = () => {
    setError("");
  };

  return (
    <div className="">
      <h1 className="md:text-7xl sm:text-5xl mt-16 text-4xl text-center p-3 font-[Oswald] uppercase">
        {text ? "Welcome Back" : "Welcome to Second Brain"}
      </h1>

      <div className="w-full mt-4 flex flex-col justify-center items-center">
        {error && (
          <div className="flex items-center justify-between rounded-xl py-2 mb-5 px-3 border-2 bg-red-400 border-red-900">
            <span className="text-red-700 font-semibold text-xl tracking-wide flex items-center gap-2">
              {error}
            </span>
            <button
              className="text-red-800 font-semibold px-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex flex-col p-5 gap-3 border shadow-xl py-10 w-[450px] rounded-lg">
          <h1 className="text-3xl text-purple-700 font-bold text-center">
            {text ? "Log in to your Account " : "Create New Account"}
          </h1>

          {!text && (
            <>
              <label className="text-lg font-medium" htmlFor="name">
                Enter Your Name:
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                value={name}
                id="name"
                className="focus:outline-purple-400 py-2 px-4 rounded-lg  border-zinc-600"
                type="text"
                placeholder="Enter Your Name"
              />
            </>
          )}

          <label className="text-lg font-medium" htmlFor="email">
            Enter Your Email:
          </label>
          <input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            value={email}
            className="focus:outline-purple-400 py-2 px-4 rounded-lg  border-zinc-600"
            type="email"
            placeholder="Enter Your email"
          />

          <label className="text-lg font-medium" htmlFor="pass">
            Enter Your Password:
          </label>
          <input
            id="pass"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            value={password}
            className="focus:outline-purple-400 py-2 px-4 rounded-lg  border-zinc-600"
            type="password"
            placeholder="Enter Your Password"
          />

          <button
            disabled={loader}
            onClick={text ? handleLogin : handleRegister}
            className={`text-white font-bold hover:text-white bg-purple-500 rounded-full px-7 py-3 sm:text-xl ${
              loader && "opacity-50"
            }`}
          >
            {loader ? <span>Loading...</span> : <span>{!text ? "Create Account" : "Log In"}</span>}
          </button>

          <p className="text-center ">
            {text ? "" : "Already Have an Account?"}{" "}
            <a className="underline text-purple-400" href={`${!text ? "/login" : "/register"}`}>
              {text ? "Create New Account" : "Sign in"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
