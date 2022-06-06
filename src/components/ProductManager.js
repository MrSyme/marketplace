import React from "react";
import { useProducts } from "../context/ProductContext";

export default function ProductManager(props) {
    const { product, onModify } = props;
    const { products, setProducts} = useProducts();


    const onRemove = (evt) => {
        let elementId = product.id
        setProducts(products.filter((product) => product.id !== elementId));
    };


    


    
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap id">
                {product.id}
            </td>
            <td className="px-6 py-4">
                {product.name}
            </td>
            <td className="px-6 py-4">$
                {product.price}
            </td>
            <td className="px-6 py-4">
                <img className="w-40" src={product.image} alt={product.name}></img>
            </td>
            <td className="px-6 py-4">{product.description}</td>
            <td className="px-6 py-4">
                <button onClick={() => onModify(product)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                    hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
                    dark:focus:ring-gray-700 modificar">
                    Modificar
                </button>
                <button onClick={onRemove} className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                    hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600
                    dark:focus:ring-gray-700 eliminar">
                    Eliminar
                </button>
            </td>
        </tr>

    );
};

