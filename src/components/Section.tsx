import { Order } from "../App";
import "./Section.css";

type Props = {
  orderList: Order[];
  onCardClick: (order: Order) => void;
};

export default function Section({ orderList, onCardClick }: Props) {
  return (
    <article>
      {orderList.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <div className="section-grid">
          {orderList.map((item) => (
            <div
              key={item.id}
              className="mb-[50px] cursor-pointer"
              onClick={() => onCardClick(item)}
            >
              <div className="w-[auto] h-[auto] m-[10px] mb-[0]">
                <span className="section-img flex align-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="relative transition-[0.5s] top-[0px] hover:top-[5px] w-[280px] h-[280px] m-[10px] mb-[5px]"
                  />
                </span>
                <h2 className="font-medium text-[20px]">{item.name}</h2>
                <span className="section-discript text-[grey] text-[14px]">
                  {item.discript}
                </span>
              </div>
              <span className="flex flex-row justify-around">
                <span className="price font-bold text-[20px]">
                  от {item.price}
                </span>
                <span className="section-select-btn rounded-[50px] w-[120px] h-[35px] bg-[#FFF0E6] hover:bg-[#FFD2B3] flex justify-center flex-row align-center text-[#D15700]">
                  <a className="mt-[3px]" href="">
                    Выбрать
                  </a>
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
