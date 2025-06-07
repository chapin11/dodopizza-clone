import React, { useEffect, useRef } from "react";

const YandexMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "ymaps-script";

    // Если скрипт уже загружен
    if ((window as any).ymaps3) {
      initMap();
      return;
    }

    // Если скрипт уже создаётся, но ещё не загрузился
    if (document.getElementById(scriptId)) {
      return;
    }

    // Создаём скрипт
    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://api-maps.yandex.ru/v3/?apikey=YOUR_API_KEY&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      if ((window as any).ymaps3 && mapRef.current) {
        initMap();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = async () => {
    const ymaps3 = (window as any).ymaps3;
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(mapRef.current!, {
      location: {
        center: [47.710401407012256, 40.21830301215445],
        zoom: 18,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
  };

  return (
    <div
      ref={mapRef}
      className="app-map-block"
      id="map"
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
};

export default YandexMap;
