"use client";
import { AuthContext } from "@/context/UserContext";
import { saveUser } from "@/utils/api/user";
import { sendPasswordResetEmail } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { googleSignIn, login, auth } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
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
        toast.error("Signup Failed !");
      });
  };

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        router.push("/", { scroll: false });
        toast.success("Signup successfully !");
      })
      .catch((error) => {
        toast.error("Wrong Password! Try again");
      });
  };
  const handleEmailBLur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handleResetPass = () => {
    if (!userEmail) {
      alert("Please Check Your Email");
      return;
    }

    sendPasswordResetEmail(auth, userEmail).then(() => {
      toast.success("Password Reset email sent. !");
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
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
            <main
              aria-label="Main"
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
              <div className="max-w-xl lg:max-w-3xl">
                <section>
                  <div className="p-4 text-gray-100 rounded-md shadow sm:p-8">
                    <h2 className="mb-3 text-3xl font-semibold text-center">
                      Sign in to your account
                    </h2>
                    <p className="text-sm text-center text-gray-400">
                      New in Baundule Club?
                      <Link
                        href={"/signup"}
                        className="ml-3 focus:underline hover:underline text-lime-300"
                      >
                        Create an Account
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
                        <p>Sign in with Google</p>
                      </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                      <hr className="w-full text-gray-400" />
                      <p className="px-3 text-gray-400">OR</p>
                      <hr className="w-full text-gray-400" />
                    </div>
                    <form
                      onSubmit={handleSubmit(handleLogin)}
                      className="space-y-8 ng-untouched ng-pristine ng-valid"
                    >
                      <div className="">
                        <div className="">
                          <label className="block text-sm">Email address</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 my-2 text-gray-100 border border-gray-700 rounded-md bg-stone-900 focus:border-violet-400"
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
                        <div className="">
                          <div className="flex justify-between">
                            <label className="text-sm">Password</label>
                          </div>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              id="password"
                              placeholder="*****"
                              className="w-full px-3 py-2 my-2 text-gray-100 border border-gray-700 rounded-md bg-stone-900 focus:border-violet-400"
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
                        <p
                          onClick={() => setShowModal(true)}
                          rel="noopener noreferrer"
                          className="text-xs cursor-pointer hover:underline text-lime-300"
                        >
                          Forgot password?
                        </p>
                        <ResetPass
                          handleResetPass={handleResetPass}
                          showModal={showModal}
                          setShowModal={setShowModal}
                          handleEmailBLur={handleEmailBLur}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-3 py-2 rounded bg-lime-600"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </main>
            <section className="relative items-end hidden h-32 bg-gray-900 lg:flex lg:col-span-5 lg:h-full xl:col-span-6">
              <Image
                alt="Night"
                src="https://i.ibb.co/z2PJmfz/signin.jpg"
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
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;

const ResetPass = ({
  showModal,
  handleResetPass,
  setShowModal,
  handleEmailBLur,
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold text-slate-950">
                    Reset Password
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 text-gray-100 border border-gray-700 rounded-md focus:border-violet-400"
                    onBlur={handleEmailBLur}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleResetPass}
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 transition-all ease-in bg-gray-700 opacity-40 backdrop-blur-md"></div>
        </>
      ) : null}
    </>
  );
};
