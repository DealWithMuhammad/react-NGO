"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { AppLogo } from "../../components/AppLogo";

const SignIn: React.FC = () => {
  const initForm = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initForm);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    // Check if email and password match
    if (
      formData.email === "reactmalayisa@gmail.com" &&
      formData.password === "11221122"
    ) {
      // Set sign-in flag in local storage
      localStorage.setItem("isAuthenticated", "true");
      console.log("Authentication successful");
      // Redirect to dashboard page
      router.push("/management");
    } else {
      setError("Invalid email or password");
      console.log("Authentication failed");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <div className="text-black">
                <AppLogo />
              </div>
              <p className="2xl:px-20">Manage your Posts</p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to ReAct Malaysia
              </h2>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    onClick={handleSignIn}
                    className="w-full cursor-pointer rounded-lg border border-[#f8cf2c] bg-[#f8cf2c] p-4 text-white transition hover:bg-opacity-90"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
