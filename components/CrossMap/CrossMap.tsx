import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

//エラー吐いてた原因、失くしていいものかはわからんけど、消しても動いた
//delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface Position {
  lat: number;
  lon: number;
  gender?: number;
  age?: string;
}

// interface positions {
//   positions?: position[];
// }

const tmpPoses: Position[] = [
  { lat: 35.1830169, lon: 137.1121831 },
  { lat: 35.0202183, lon: 136.47301121 },
  {
    lat: 35.174499411111,
    lon: 137.08854111111,
  },
];

const CrossMap = ({ positions = tmpPoses }: { positions?: Position[] }) => {
  return (
    <>
      <MapContainer
        center={[
          positions[0]?.lat ?? tmpPoses[0].lat,
          positions[0]?.lon ?? tmpPoses[0].lon,
        ]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((value, index) => (
          <Marker position={[value.lat, value.lon]} key={Math.random()}>
            <Popup>
              <h1>
                {value.gender && value.gender === 1
                  ? "性別：男性"
                  : value.gender === 2
                  ? "性別：女性"
                  : value.gender === 3
                  ? "性別：その他"
                  : ""}
              </h1>
              <h1>{value.age && value.age + "歳"}</h1>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default CrossMap;
