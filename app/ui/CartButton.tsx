"use client";

import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";

export default function CartButton() {
   const router = useRouter();
   const handleClick = () => {
      router.push("/cart");
   };
   const items =
      JSON.parse(localStorage.getItem("products_in_cart")!) || [];
   return (
      <button
         type="button"
         className="relative"
         onClick={handleClick}
      >
         <Badge
            className="absolute bg-fuchsia-800 hover:bg-fuchsia-900 text-white py-[0.05rem] px-[0.3rem] top-[-0.5rem] right-[-0.5rem] text-sm"
            variant="secondary"
         >
            {items.length ?? 0}
         </Badge>
         <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-4xl dark:bg-slate-900 bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g id="Shopping_Basket">
               <g>
                  <path d="M19.44,7.937H17.3l-1.21-4.51a.508.508,0,0,0-.61-.35.489.489,0,0,0-.35.61l1.14,4.25H7.74l1.14-4.25a.5.5,0,0,0-.36-.61.513.513,0,0,0-.61.35l-1.2,4.51H4.56a1.5,1.5,0,0,0-.32,2.96l.74,7.77a2.492,2.492,0,0,0,2.49,2.27h9.06a2.492,2.492,0,0,0,2.49-2.27l.74-7.77a1.5,1.5,0,0,0-.32-2.96Zm-1.41,10.64a1.5,1.5,0,0,1-1.5,1.36H7.47a1.5,1.5,0,0,1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.44a.5.5,0,0,1,.5.5A.508.508,0,0,1,19.44,9.937Z"></path>
                  <path d="M9.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,9.5,17.432Z"></path>
                  <path d="M14.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,14.5,17.432Z"></path>
               </g>
            </g>
         </svg>
      </button>
   );
}
