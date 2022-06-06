import React from "react";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useProducts } from "../../../context/ProductContext";
import ProductManager from "../../../components/ProductManager";


const MaestroProductos = () => {
  const { setUser } = useUser();
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { products, setProducts, id, setIds } = useProducts();



  const handleClick = (evt) => {
    evt.preventDefault();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const GoViewHandleClick = (evt) => {
    evt.preventDefault();
    navigate("/");
  }


  function validarImg(image) {
    let extension = image.value.split(".").pop().toLowerCase();
    if (extension != "jpg" && extension != "png") {
      enqueueSnackbar("La imagen debe ser formato .jpeg o png ", {
        variant: "error",
        autoHideDuration: 3000,
      })
      return false;
    }
    return true;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    let fReader = new FileReader()
    let img = evt.target.img;

    let name = evt.target.name.value;
    let price = evt.target.price.value;
    let description = evt.target.description.value;
    if (validarImg(img)) {
      img = evt.target.img.files[0];
      fReader.readAsDataURL(img);
      fReader.onloadend = function (event) {
        img = [event.target.result];
        let product = {
          id: id,
          name: name,
          price: price,
          image: img,
          imageAlt: name,
          link: `/products/${id}`,
          description: description
        };
        setProducts(oldProducts => [...oldProducts, product]);
        setIds(id + 1);
      }
    }
    // navigate("/");
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Ecommerce
            </span>
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1`}"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <div
                  onClick={GoViewHandleClick}
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white cursor-pointer md:hover:text-blue-700">
                  Home
                </div>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                >
                  Log out
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      <form className="mt-8 ml-4 space-y-2" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Product name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Price
          </label>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]"
            name="price"
            id="price"
            className="bg-gray-50 border border-gray-300 
                text-gray-900 sm:text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 p-2.5 inline mr-2"
            placeholder="590"
            required
          />
        </div>
        <div>
          <label
            htmlFor="img"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Image
          </label>
          <input
            type="file"
            name="img"
            id="img"
            className="bg-gray-50 border border-gray-300 
                text-gray-900 sm:text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Product description"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white dark:bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
        >
          Save image
        </button>

      </form>

      <div>
        <h2>Products:</h2>
        <div className="px-48 relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductManager key={product.id} product={product}></ProductManager>
              ))}

            </tbody>
          </table>
        </div>


      </div>




    </div>
  );
};

export default MaestroProductos;
