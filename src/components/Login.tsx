import { useForm } from "react-hook-form";
import Input from "./Input";
import loginImage from "../assets/login-image.jpg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen md:max-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-5xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center ">
            Login
          </h2>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="space-y-6"
          >
            <Input
              type="text"
              label="Email/Username"
              placeholder="Enter your email address or username"
              {...register("emailOrUsername")}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <p className="text-gray-600 text-right -mt-4 hover:underline">
              <Link to="">Forgot password?</Link>
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-950 transition-colors duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-center -mt-4">Or Sign up using</p>
          <div className="flex justify-center space-x-8">
            <FaGoogle size={30} className="hover:scale-105" />

            <FaFacebook size={30} className="hover:scale-105" />
          </div>
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
