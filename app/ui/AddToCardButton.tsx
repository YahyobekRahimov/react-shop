"use client";

import { useEffect, useState } from "react";
import { Product, ProductInCart } from "../type/types";

export default function AddToCardButton(product: Product) {
   const { id } = product;
   const [quantity, setQuantity] = useState(getQuantity());
   function getQuantity(): number {
      const storedProducts = localStorage.getItem("products_in_cart");

      if (storedProducts !== null && storedProducts !== undefined) {
         const productsInCart: ProductInCart[] =
            JSON.parse(storedProducts);
         const currentProduct = productsInCart.find(
            (product) => product.id === id
         );

         const currentQuantity = currentProduct?.quantity;

         if (currentQuantity) {
            return currentQuantity;
         }
      }

      return 0;
   }

   const changeTheQuantity = (quantity: number) => {
      // if there are products in the cart
      if (
         localStorage.getItem("products_in_cart") !== null &&
         localStorage.getItem("products_in_cart") !== undefined &&
         JSON.parse(localStorage.getItem("products_in_cart")!).length
      ) {
         let productsInCart: ProductInCart[] = JSON.parse(
            localStorage.getItem("products_in_cart")!
         );
         let updatedProducts;
         if (quantity === 0) {
            productsInCart = productsInCart.filter(
               (product) => product.id !== id
            );
            updatedProducts = productsInCart;
         } else {
            const index = productsInCart.findIndex(
               (product) => product.id === id
            );
            console.log(49, index);
            if (index === -1) {
               console.log("item not found");
               productsInCart.push({
                  ...product,
                  quantity: quantity,
               });
               updatedProducts = productsInCart;
            } else {
               productsInCart[index].quantity = quantity;
               updatedProducts = productsInCart;
               console.log(productsInCart);
            }
         }
         localStorage.setItem(
            "products_in_cart",
            JSON.stringify(updatedProducts)
         );
      }
      // If there are no products in the cart
      else {
         let updatedProducts = [];
         updatedProducts.push({ ...product, quantity: quantity });
         localStorage.setItem(
            "products_in_cart",
            JSON.stringify(updatedProducts)
         );
      }
   };

   const handleIncrement = () => {
      setQuantity(quantity + 1);
      changeTheQuantity(quantity + 1);
   };

   const handleDecrement = () => {
      setQuantity(quantity - 1);
      changeTheQuantity(quantity - 1);
   };

   return (
      <div key={id}>
         {quantity !== 0 ? (
            <div className="flex items-center gap-1">
               <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center w-8 h-8 text-lg bg-purple-600 hover:bg-purple-700 text-white active:scale-95 duration-150 rounded-lg"
               >
                  +
               </button>
               <p className="flex items-center justify-center w-8 h-8 text-lg bg-gray-300 rounded-lg">
                  {quantity}
               </p>
               {quantity === 1 ? (
                  <button
                     onClick={handleDecrement}
                     className="flex items-center justify-center w-8 h-8 text-lg bg-red-600 rounded-lg"
                  >
                     <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="m-auto fill-white"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
                     </svg>
                  </button>
               ) : (
                  <button
                     onClick={handleDecrement}
                     className="flex items-center justify-center w-8 rounded-lg h-8 text-lg bg-purple-600 hover:bg-purple-700 text-white active:scale-95 duration-150"
                  >
                     -
                  </button>
               )}
            </div>
         ) : (
            <button
               onClick={handleIncrement}
               className="py-1 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg active:scale-95 duration-150"
            >
               Add To Cart
            </button>
         )}
      </div>
   );
}
