"use client";

import { ProductInCart } from "../type/types";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";

export default function Products() {
   const products: ProductInCart[] = JSON.parse(
      localStorage.getItem("products_in_cart")!
   );
   return (
      <Container>
         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 mt-10">
            {products &&
               products.map((product, index) => (
                  <ProductCard product={product} key={index} />
               ))}
         </div>

         {!products ? (
            <h1 className="text-[6rem]">Your cart is empty</h1>
         ) : (
            ""
         )}
      </Container>
   );
}
