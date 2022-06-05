import React from "react";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const MaestroProductos = () => {
  const { setUser } = useUser();
  let navigate = useNavigate();

  const handleClick = (evt) => {
    evt.preventDefault();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default MaestroProductos;
