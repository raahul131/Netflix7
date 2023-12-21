import React from "react";
import { useFormik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { SignUpSchema } from "../../../utils/Schema";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (
  values: SignUpFormValues,
  actions: FormikHelpers<SignUpFormValues>
) => {
  console.log(values);
  actions.resetForm();
};

const SignUpForm: React.FC = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit,
    });

  return (
    <>
      <div className="py-28 w-full min-h-screen h-full bg-cover bg-[url('./assets/bg.jpg')]">
        <form
          onSubmit={handleSubmit}
          className=" bg-black bg-opacity-80 w-1/3 p-14 md:p-16 mx-auto right-0 left-0 rounded-lg text-white"
        >
          <h1 className="text-3xl font-bold py-4 tracking-wide">Sign Up</h1>

          {/* Name */}
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Full name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-zinc-800 rounded-lg py-4 px-5 my-3 outline-none placeholder-zinc-500"
          />
          {errors.name && touched.name ? (
            <p className="text-[#e87c03] px-3 ">{errors.name}</p>
          ) : null}

          {/* Email */}
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email or phone number"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-zinc-800 rounded-lg py-4 px-5 mt-3 mb-1 outline-none placeholder-zinc-500"
          />
          {errors.email && touched.email ? (
            <p className="text-[#e87c03] px-3 ">{errors.email}</p>
          ) : null}

          {/* Password */}
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-zinc-800 rounded-lg py-4 px-5 mt-3 mb-1 outline-none placeholder-zinc-500"
          />
          {errors.password && touched.password ? (
            <p className="text-[#e87c03] px-3 ">{errors.password}</p>
          ) : null}

          {/* Submit Button */}
          <button
            className="w-full text-lg font-semibold bg-[#e50914] py-3 rounded-lg mt-8 mb-2"
            type="submit"
          >
            Sign Up
          </button>

          <div className="flex items-center justify-between py-2">
            <div className="text-sm items-center flex">
              <input type="checkbox" className="" />
              <h1 className="px-1 text-zinc-400">Remember me</h1>
            </div>
            <h1 className="text-zinc-400 text-sm">Need help?</h1>
          </div>

          <div className="text-zinc-400 my-7">
            Already registered ?
            <Link
              to="/"
              className="text-white hover:underline text-lg cursor-pointer"
            >
              Please Sign in
            </Link>
          </div>

          <div className="text-zinc-400 text-base pb-16">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
            <span className="text-blue-600 hover:underline cursor-pointer">
              Learn more
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
