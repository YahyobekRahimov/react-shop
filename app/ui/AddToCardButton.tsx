"use client";

import { useState } from "react";

export default function AddToCardButton({ id }: { id: number }) {
   const [added, setAdded] = useState(false);
   const [quantity, setQuantity] = useState(1);
   return (
      <div key={id}>
         {added ? (
            <div className="flex items-center gap-1">
               <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex items-center justify-center w-8 h-8 text-lg bg-purple-600 hover:bg-purple-700 text-white active:scale-95 duration-150 rounded-lg"
               >
                  +
               </button>
               <p className="flex items-center justify-center w-8 h-8 text-lg bg-gray-300 rounded-lg">
                  {quantity}
               </p>
               {quantity === 1 ? (
                  <button className="flex items-center justify-center w-8 h-8 text-lg bg-red-600 rounded-lg">
                     <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
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
                     onClick={() => setQuantity((prev) => prev - 1)}
                     className="flex items-center justify-center w-8 rounded-lg h-8 text-lg bg-purple-600 hover:bg-purple-700 text-white active:scale-95 duration-150"
                  >
                     -
                  </button>
               )}
            </div>
         ) : (
            <button
               onClick={() => setAdded(true)}
               className="py-1 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg active:scale-95 duration-150"
            >
               Add To Cart
            </button>
         )}
      </div>
   );
}
