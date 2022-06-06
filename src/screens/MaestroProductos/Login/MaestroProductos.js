import React, { useState, useEffect } from "react";
import { useUser } from "../../../context/UserContext";
import { useSnackbar } from "notistack";
import { useProducts } from "../../../context/ProductContext";
import ProductManager from "../../../components/ProductManager";
import Pagination from "../../../components/Pagination";
import MainLayout from "../../../layouts/MainLayout";

const MaestroProductos = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    description: "",
  });

  const { enqueueSnackbar } = useSnackbar();
  const { products, setProducts, id, setIds } = useProducts();

  const productsToShow = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  const onModify = (product) => {
    setProductForm({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  function validarImg(image) {
    let extension = image.value.split(".").pop().toLowerCase();
    if (extension != "jpg" && extension != "png") {
      enqueueSnackbar("La imagen debe ser formato .jpeg o png ", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return false;
    }
    return true;
  }

  const updateProduct = (index, image) => {
    let arrayProducts = products;
    let newproduct = {
      ...products[index],
      name: productForm.name,
      price: productForm.price,
      imageAlt: productForm.name,
      description: productForm.description,
    };
    if (image) {
      console.log(image);
      let fReader = new FileReader();
      fReader.readAsDataURL(image);
      fReader.onloadend = function (event) {
        let image = [event.target.result];
        newproduct = {
          ...newproduct,
          image: image,
        };
      };
    }
    arrayProducts[index] = newproduct;
    setProducts(arrayProducts);
    console.log(products);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let fReader = new FileReader();
    let img = evt.target.img;

    let name = evt.target.name.value;
    let price = evt.target.price.value;
    let description = evt.target.description.value;

    let newProductIndex = products.findIndex(
      (product) => product.id === productForm.id
    );
    if (newProductIndex != -1) {
      updateProduct(newProductIndex, img.files[0]);
      return;
    }

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
          description: description,
        };
        setProducts((oldProducts) => [...oldProducts, product]);
        setIds(id + 1);
      };
    }
  };

  return (
    <MainLayout>
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
            value={productForm.name}
            onChange={(evt) =>
              setProductForm({
                ...productForm,
                name: evt.target.value,
              })
            }
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
            value={productForm.price}
            onChange={(evt) =>
              setProductForm({
                ...productForm,
                price: evt.target.value,
              })
            }
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
            value={productForm.description}
            onChange={(evt) =>
              setProductForm({
                ...productForm,
                description: evt.target.value,
              })
            }
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
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productsToShow.map((product) => (
                <ProductManager
                  key={product.id}
                  product={product}
                  onModify={onModify}
                ></ProductManager>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        productsPerPage={productsPerPage}
        products={products}
        pagesVisited={pagesVisited}
      />
    </MainLayout>
  );
};

export default MaestroProductos;
