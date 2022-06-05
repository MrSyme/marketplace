import React, { useEffect } from "react";
import LoginImage from "../../assets/images/login.svg";
import { useSnackbar } from "notistack";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setUser } = useUser();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Buscar usuario en el local storage
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        // Guardar usuario en el local storage
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        // Redireccionar a la pantalla principal
        navigate("/product-master");
      } else {
        enqueueSnackbar("Contraseña incorrecta", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } else {
      enqueueSnackbar("Usuario no encontrado", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user.role !== "comprador") {
        navigate("/product-master");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <div className="bg-white shadow rounded-lg lg:flex items-center justify-center md:mt-0 w-full lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-10">
        <div className="hidden lg:flex w-full">
          <img className="rounded-l-lg" src={LoginImage} alt="login" />
        </div>
        <div className="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Sign in
          </h2>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start">
              <a
                href="#"
                className="text-sm text-blue-700 hover:underline ml-auto"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{" "}
              <a className="text-blue-700 hover:underline">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
