import Link from "next/link";
import { Product } from "../type/types";
import AddToCardButton from "./AddToCardButton";

export default function ProductCard({
   product,
   key,
}: {
   product: Product;
   key: number;
}) {
   return (
      <div
         key={key}
         className="md:p-4 lg:p-7 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center"
      >
         <Link href={"/" + product.id}>
            <img
               className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
               src={product.images[0]}
               alt={product.title}
            />
         </Link>

         <h3 className="font-semibold text-xl mb-2 h-auto">
            {product.title}
         </h3>
         <p className="text-gray-900 dark:text-gray-500 text-xs">
            {product.description.slice(0, 50)}...{" "}
            <Link
               href={"/products"}
               className="text-black dark:text-white font-bold"
            >
               Read more
            </Link>
         </p>
         <div className="bg-gray-300 text-black dark:bg-slate-900 w-max px-4 py-1 rounded-3xl mt-5 mb-5 border border-solid dark:text-white dark:text-inherit border-slate-500">
            {product.category.name}
         </div>
         <div className="flex items-center justify-between">
            <div className="flex flex-col">
               <span className="text-gray-800 dark:text-gray-400 text-xs">
                  Price
               </span>
               <span className="font-semibold text-gray-800 dark:text-white text-lg">
                  $ {product.price}
               </span>
            </div>
            <AddToCardButton {...product} />
         </div>
      </div>
   );
}
