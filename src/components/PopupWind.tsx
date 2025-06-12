import "./PopupWind.css";
type Order = {
  id: number;
  name: string;
  img: string;
  discript: string;
  price: number;
  oftenOrder: boolean;
};

type PopupProps = {
  order: Order;
  onClose: () => void;
};

export default function PopupWind({ order, onClose }: PopupProps) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        <div className="popup-img-block">
          <img src={order.img} alt={order.name} />
        </div>
        <div className="popup-main">
          <div className="">
            <h2 className="font-bold text-[24px]">{order.name}</h2>
            <p className="font-light text-[20px]">{order.discript}</p>
          </div>
          <p className="font-regular text-[20px]">Цена: {order.price} ₽</p>
        </div>
      </div>
    </div>
  );
}
