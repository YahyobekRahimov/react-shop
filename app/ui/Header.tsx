import Link from "next/link";
import CartButton from "./CartButton";
import Container from "./Container";
import LinkToGithub from "./LinkToGithub";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
   return (
      <header className="dark:text-white dark:bg-slate-700 overflow-hidden py-5">
         <div className="object-cover w-full relative">
            <img
               src="https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg"
               alt="image For decoration"
               className="w-full absolute top-[-10rem] left-0 z-[-1]"
            />
         </div>
         <Container>
            <div className="flex justify-between items-center">
               <Link href="/">
                  <span className="text-5xl font-bold">
                     React Shop
                  </span>
               </Link>
               <div className="flex gap-5">
                  <CartButton />
                  <ThemeSwitcher />
                  <LinkToGithub />
               </div>
            </div>
         </Container>
      </header>
   );
}
