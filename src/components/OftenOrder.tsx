import { Order } from "../App";
import { useRef, useEffect } from "react";

type Props = {
  orderList: Order[];
  onCardClick: (order: Order) => void;
};

export default function OftenOrder({ orderList, onCardClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Возможность прокрутки по горизонтали при большом колисестве заказов
  useEffect(() => {
    
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      {orderList.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <article
          ref={containerRef}
          //* Если длина блока меньше чем длина всех переданных элементов то добавляем прокрутку
          className={"oftenOrder-table flex flex-row pt-[10px] font-regular overflow-hidden" }
        >
          {orderList.map((item) => (
            <div
              key={item.id}
              className="oftenorder-table-item w-[100%] max-w-[260px] h-[110px] shrink-0
              mr-[20px] mb-[10px] mt-[10px] shadow-md/30 flex align-center rounded-xl "
              onClick={() => onCardClick(item)}
            >
              <span className="oftenOrder-img">
                <img src={item.img} alt="не" className="w-[90px] m-[10px] " />
              </span>
              <span className="flex flex-col align-center justify-center">
                <span>{item.name} </span>

                <span>от {item.price} ₽</span>
              </span>
            </div>
          ))}
        </article>
      )}
    </>
  );
}
