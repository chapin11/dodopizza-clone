import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [47.71039912004364, 40.218300577314174],
          zoom: 19,
        }}
        id="map"
      >
        <Placemark geometry={[47.71039912004364, 40.218300577314174]} />
        <Placemark geometry={[47.22656180527689, 39.74315804653774]} />
      </Map>
    </YMaps>
  );
}
