import "./Header.css";
import { ShoppingCart } from "lucide-react";
import "../images/Dodo Rounded v2 — Web/DodoRounded_v2-Light/DodoRounded_v2-Light.css";
import "../images/Dodo Rounded v2 — Web/DodoRounded_v2-Medium/DodoRounded_v2-Medium.css";
import "../images/Dodo Rounded v2 — Web/DodoRounded_v2-Bold/DodoRounded_v2-Bold.css";
export default function Header() {
  return (
    <>
      <header className="header-wrapper flex flex-row justify-between align-center font-medium">
        <div className="header-logo mt-[5px]" />
        <nav className="nav mt-[10px]">
          <span className="nav-a">
            <a href="#pizza">Пицца</a>
          </span>
          <span className="nav-a">
            <a href="#combo">Комбо</a>
          </span>
          <span className="nav-a">
            <a href="#snacks">Закуски</a>
          </span>
          <span className="nav-a">
            <a href="#cocktail">Коктейли</a>
          </span>
          <span className="nav-a">
            <a href="#coffe">Кофе</a>
          </span>
          <span className="nav-a">
            <a href="#drinks">Напитки</a>
          </span>
          <span className="nav-a">
            <a href="#deserts">Десерты</a>
          </span>
          <span className="nav-a">
            <a href="#etc">Ещё</a>
          </span>
        </nav>
        <div className="header-cart-btn flex flex-row mt-[5px] rounded-[50px] w-[125px] h-[35px] bg-[#E86100] align-center justify-center text-white">
          <a className="flex flex-row mt-[5px]" href="">
            Корзина  <ShoppingCart />
          </a>
        </div>
      </header>
    </>
  );
}
