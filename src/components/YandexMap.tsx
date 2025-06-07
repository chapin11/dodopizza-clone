import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
    <YMaps>
      <div>
        <Map
          id="map"
          defaultState={{
            center: [47.710395679596225, 40.218299773879956],
            zoom: 19,
          }}
        />
      </div>
    </YMaps>
  );
}
