import { useForm } from "react-hook-form";
import Input from "./Input";
import loginImage from "../assets/login-image.jpg";
import { Link } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen md:max-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-5xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center ">
            Sign up
          </h2>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="space-y-6"
          >
            <Input
              type="text"
              label="Email"
              placeholder="Enter your email address "
              {...register("emai")}
            />
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
              {...register("username")}
            />
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              {...register("phoneNumber")}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Create password"
              {...register("password")}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-950 transition-colors duration-200"
            >
              Create
            </button>
          </form>
          <p className="text-gray-600 text-center -mt-4">
            Already have an account?{" "}
            <span className="hover:underline">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src={loginImage}
            alt="Login Hero"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
