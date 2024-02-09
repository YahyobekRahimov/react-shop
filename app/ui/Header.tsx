import Container from "./Container";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
   return (
      <header className="dark:text-white dark:bg-slate-700">
         <Container>
            <div className="flex justify-between items-center">
               <div className="text-5xl">React Shop</div>

               <ThemeSwitcher />
            </div>
         </Container>
      </header>
   );
}
