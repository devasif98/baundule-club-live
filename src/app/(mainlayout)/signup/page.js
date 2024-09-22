"use client";
import { AuthContext } from "@/context/UserContext";
import { saveUser } from "@/utils/api/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { googleSignIn, updateUser, createUser } = useContext(AuthContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        // save user
        const userData = {
          name: user.displayName,
          email: user.email,
        };
        saveUser(userData);

        router.push("/", { scroll: false });
        toast.success("Signup successfully !");
      })
      .catch((error) => {
        console.error("error: ", error);
        toast.error("Signup Failed !");
      });
  };

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        router.push("/", { scroll: false });
        toast.success("Signup successfully !");
        const userInfo = {
          displayName: data.name,
        };

        // save user
        const userData = {
          name: data.name,
          email: user.email,
        };
        saveUser(userData);

        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        toast.error("Signup Failed !");
      });
  };

  const title = "Baundule Club";
  const desc =
    "Welcome to Baundule Club, your passport to extraordinary adventures and seamless travel experiences. Discover the world with us as we curate unforgettable journeys, from breathtaking destinations to personalized itineraries. Whether you seek adventure, relaxation, or cultural immersion, let Baundule Club be your trusted travel companion. Explore, dream, and embark on your next adventure today!";

  return (
    <>
      <div className="-mt-7">
        <section className="bg-zinc-900">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative items-end hidden h-32 bg-gray-900 lg:flex lg:col-span-5 lg:h-full xl:col-span-6">
              <Image
                alt="Night"
                src="https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                className="absolute inset-0 object-cover w-full h-full opacity-80"
                width={500}
                height={500}
              />

              <div className="lg:relative lg:p-12">
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  Welcome to <span className="md:text-5xl"> {title}</span>
                </h2>

                <p className="mt-4 leading-relaxed text-white/90">{desc}</p>
              </div>
            </section>

            <main
              aria-label="Main"
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
              <div className="max-w-xl lg:max-w-3xl">
                <section>
                  <div className="p-4 text-gray-100 rounded-md shadow sm:p-8">
                    <h2 className="mb-3 text-3xl font-semibold text-center">
                      Sign up to your account
                    </h2>
                    <p className="text-sm text-center text-gray-400">
                      Already have account?
                      <Link
                        href={"/signin"}
                        className="ml-3 focus:underline hover:underline text-lime-300"
                      >
                        Sign in here
                      </Link>
                    </p>
                    <div className="my-6 space-y-4">
                      <button
                        onClick={handleGoogleLogIn}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full gap-3 px-3 py-2 rounded btn bg-lime-600"
                      >
                        <BsGoogle />
                        <p>Sign up with Google</p>
                      </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                      <hr className="w-full text-gray-400" />
                      <p className="px-3 text-gray-400">OR</p>
                      <hr className="w-full text-gray-400" />
                    </div>
                    <form
                      onSubmit={handleSubmit(handleSignUp)}
                      className="space-y-8 ng-untouched ng-pristine ng-valid"
                    >
                      <div className="space-y-2">
                        <div className="space-y-2">
                          <label className="block text-sm">Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Deo"
                            className="w-full px-3 py-2 text-gray-100 border border-gray-700 rounded-md bg-stone-900 focus:border-violet-400"
                            {...register("name", {
                              required: "Name is required*",
                            })}
                          />
                          {errors.name && (
                            <p className="text-red-600" role="alert">
                              {errors.name?.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm">Email address</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 text-gray-100 border border-gray-700 rounded-md bg-stone-900 focus:border-violet-400"
                            {...register("email", {
                              required: "Email Address is required*",
                            })}
                          />
                          {errors.email && (
                            <p
                              className="mt-1 text-sm text-red-600 w-80"
                              role="alert"
                            >
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm">Password</label>
                          </div>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              id="password"
                              placeholder="*****"
                              className="w-full px-3 py-2 text-gray-100 border border-gray-700 rounded-md bg-stone-900 focus:border-violet-400"
                              {...register("password", {
                                required: "Password is required*",
                                minLength: {
                                  value: 8,
                                  message:
                                    "Password must be at least 8 characters or longer",
                                },
                                pattern: {
                                  value:
                                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                  message:
                                    "Must be one uppercase, one lowercase, one digit & one special character",
                                },
                              })}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-2"
                            >
                              {showPassword ? (
                                <FaEye className="text-white" />
                              ) : (
                                <FaEyeSlash className="text-white" />
                              )}
                            </button>
                          </div>
                          {errors.password && (
                            <p
                              className="mt-1 text-sm text-red-600 w-80"
                              role="alert"
                            >
                              {errors.password?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 rounded px3 bg-lime-600"
                      >
                        Sign up
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
