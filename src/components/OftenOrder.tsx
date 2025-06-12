import { Order } from "../App";
import { useRef, useEffect } from "react";

type Props = {
  orderList: Order[];
  onCardClick: (order: Order) => void;
};

export default function OftenOrder({ orderList, onCardClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

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
          //* Если длина меньше чем длина всех переданных элементов то добавляем прокрутку
          className={
            containerRef.current
              ? containerRef.current.offsetWidth >= 260 * orderList.length
                ? "oftenOrder-table flex flex-row pt-[10px] font-regular"
                : "oftenOrder-table flex flex-row pt-[10px] font-regular overflow-x-scroll"
              : "oftenOrder-table flex flex-row pt-[10px] font-regular"
          }
        >
          {orderList.map((item) => (
            <div
              key={item.id}
              className="oftenorder-table-item min-w-[260px] h-[110px]
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
