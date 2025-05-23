import "./App.css";
import Header from "./components/Header";
import OftenOrder from "./components/OftenOrder";
import Section from "./components/Section";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-Bold/DodoRounded_v2-Bold.css";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-Light/DodoRounded_v2-Light.css";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-Medium/DodoRounded_v2-Medium.css";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-Regular/DodoRounded_v2-Regular.css";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-Thin/DodoRounded_v2-Thin.css";
import "./images/Dodo Rounded v2 — Web/DodoRounded_v2-ExtraLight/DodoRounded_v2-ExtraLight.css";

export type Order = {
  id: number;
  name: string;
  img: string;
  discript: string;
  price: number;
  oftenOrder: boolean;
};

const PizzaOrderList: Order[] = [
  {
    id: 1,
    name: "Пепперони",
    img: "https://media.dodostatic.net/image/r:292x292/11ee7d610a62d78598406363a9a8ad65.jpg",
    discript:
      "Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус",
    price: 519,
    oftenOrder: true,
  },
  {
    id: 2,
    name: "Гавайская",
    img: "https://media.dodostatic.net/image/r:292x292/11ee7d617e9339cfb185921a343ad8fd.jpg",
    discript: "Двойная порция цыпленка, ананасы, моцарелла, соус альфредо",
    price: 539,
    oftenOrder: true,
  },
  {
    id: 3,
    name: "Мясная",
    img: "https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.jpg",
    discript:
      "Цыпленок, ветчина, пикантная пепперони,острые колбаски чоризо,моцарелла, фирменный томатный соус",
    price: 519,
    oftenOrder: true,
  },
  {
    id: 4,
    name: "Втечина и сыр",
    img: "https://media.dodostatic.net/image/r:584x584/11ee7d60fda22358ac33c6a44eb093a2.avif",
    discript: "Ветчина, моцарелла, фирменный соус альфредо",
    price: 479,
    oftenOrder: false,
  },
  {
    id: 5,
    name: "Четыре сыра",
    img: "https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif",
    discript:
      "Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо",
    price: 519,
    oftenOrder: false,
  },
  {
    id: 6,
    name: "Пепперони фреш",
    img: "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
    discript:
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
    price: 369,
    oftenOrder: false,
  },
  {
    id: 7,
    name: "Ветчина и грибы",
    img: "https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif",
    discript:
      "Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус",
    price: 519,
    oftenOrder: true,
  },
  {
    id: 8,
    name: "Арива",
    img: "https://media.dodostatic.net/image/r:584x584/019591a0591d7642b97bf6ed6da45252.avif",
    discript:
      "Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
    price: 669,
    oftenOrder: false,
  },
  {
    id: 9,
    name: "Карбонара",
    img: "https://media.dodostatic.net/image/r:584x584/019591b13a1a724b90092c16d9b1c05a.avif",
    discript:
      "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы",
    price: 659,
    oftenOrder: false,
  },
  {
    id: 10,
    name: "Мясная",
    img: "https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.jpg",
    discript:
      "Цыпленок, ветчина, пикантная пепперони,острые колбаски чоризо,моцарелла, фирменный томатный соус",
    price: 519,
    oftenOrder: false,
  },
];

const filteredOrderList = PizzaOrderList.filter((item) => {
  return item.oftenOrder === true;
});

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="app-header">
          <Header />
        </div>
        <section>
          <h2 className="font-regular text-[24px]">Часто заказывают</h2>
          <OftenOrder orderList={filteredOrderList} />
        </section>
        <main>
          <section>
            <h2 className="font-bold text-[36px]">Пиццы</h2>
            <Section orderList={PizzaOrderList} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
