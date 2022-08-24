import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface position {
  latitude: number;
  longitude: number;
}

// interface positions {
//   positions?: position[];
// }

const tmpPoses: position[] = [
  { latitude: 35.1830169, longitude: 137.1121831 },
  { latitude: 35.0202183, longitude: 136.47301121 },
  {
    latitude: 35.174499411111,
    longitude: 137.08854111111,
  },
];

const CrossMap = ({ positions = tmpPoses }: { positions?: position[] }) => {
  return (
    <>
      <MapContainer
        center={[positions[0].latitude, positions[0].longitude]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((value, index) => (
          <Marker position={[value.latitude, value.longitude]}>
            <Popup>{index + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default CrossMap;
