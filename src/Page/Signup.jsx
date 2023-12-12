import React, { useState } from "react";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { firebaseAuth } from "../Utilities/firebase-config";
import BackgroundImge from "../Component/BackgroundImge";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    // Add the same login logic as in handleSignIn
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundImge className="overflow-x-hidden" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Unlimited movies, TV shows, and more
          </h1>
          <h4 className="text-lg">Watch anywhere, cancel anytime</h4>
          <p className="text-sm">
            Ready to watch? Enter your email and password
          </p>
        </div>
        <div className="mb-2 gap-1 flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={formValues.email}
            className="w-full md:w-64 py-2 px-4 mb-2 rounded h-12"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            name="password"
            value={formValues.password}
            className="w-full md:w-64 py-2 px-4 mb-4 rounded h-12 text-black"
          />
          <button
            onClick={handleSignIn}
            className="w-full md:w-auto h-12 px-6 bg-red-500 rounded hover:bg-red-600 text-white"
          >
            Log in
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full md:w-auto px-4 py-2 text-sm underline"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Signup;
