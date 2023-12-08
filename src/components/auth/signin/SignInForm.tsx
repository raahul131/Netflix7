

// import { useFormik } from "formik";
// import { FormikHelpers } from "formik";
// import { Link } from "react-router-dom";
// import { SignInSchema } from "../../../utils/Schema";

// const initialValues = {
//   email: "",
//   password: "",
// };

// const onSubmit = (values: string, actions: FormikHelpers<string>) => {
//   console.log(values);
//   actions.resetForm();
// };

// const SignInForm = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: SignInSchema,
//       onSubmit,
//     });

//   // console.log(errors);
//   // console.log(values);

//   return (
//     <div className="py-28">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black bg-opacity-80 w-1/3 p-14 md:p-16 mx-auto right-0 left-0 rounded-lg text-white"
//       >
//         <h1 className="text-3xl font-bold py-4 tracking-wide">Sign in</h1>

//         {/* Email */}
//         <input
//           type="email"
//           autoComplete="off"
//           name="email"
//           id="email"
//           placeholder="Email or phone number"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className="w-full bg-zinc-800 rounded-lg py-4 px-5 mt-3 mb-1 outline-none placeholder-zinc-500"
//         />
//         {errors.email && touched.email ? (
//           <p className="text-[#e87c03] px-3 ">{errors.email}</p>
//         ) : null}

//         {/* Password */}
//         <input
//           type="password"
//           autoComplete="off"
//           name="password"
//           id="password"
//           placeholder="Password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className="w-full bg-zinc-800 rounded-lg py-4 px-5 mt-3 mb-1 outline-none placeholder-zinc-500"
//         />
//         {errors.password && touched.password ? (
//           <p className="text-[#e87c03] px-3 ">{errors.password}</p>
//         ) : null}

//         {/* Submit Button */}
//         <button
//           className="w-full text-lg font-semibold bg-[#e50914] py-3 rounded-lg mt-8 mb-2"
//           type="submit"
//         >
//           Sign In
//         </button>
//         <Link
//           to="/browse"
//           className="w-full text-lg text-center font-semibold bg-[#e50914] py-3 rounded-lg mt-1 mb-2"
//           type="submit"
//         >
//           Home
//         </Link>

//         <div className="flex items-center justify-between py-2">
//           <div className="text-sm items-center flex">
//             <input type="checkbox" className="" />
//             <h1 className="px-1 text-zinc-400">Remember me</h1>
//           </div>
//           <h1 className="text-zinc-400 text-sm">Need help?</h1>
//         </div>

//         <div className="text-zinc-400 my-7">
//           New to Netflix?
//           <Link
//             to="/signupform"
//             className="text-white hover:underline text-lg cursor-pointer"
//           >
//             Please Sign up
//           </Link>
//         </div>

//         <div className="text-zinc-400 text-base pb-16">
//           This page is protected by Google reCAPTCHA to ensure you&apos;re not a
//           bot.
//           <span className="text-blue-600 hover:underline cursor-pointer">
//             Learn more
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;
