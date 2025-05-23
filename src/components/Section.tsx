import { Order } from "../App";
import "./Section.css";

export default function Section({ orderList }: { orderList: Order[] }) {
  return (
    <article>
      {orderList.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <div className="section-grid">
          {orderList.map((item) => (
            <div key={item.id} className="mb-[50px] ">
              <div className="w-[300px] h-[430px] m-[10px] mb-[0] cursor-pointer">
                <span className="section-img">
                  <img
                    src={item.img}
                    alt="не"
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
