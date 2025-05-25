import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <div className="max-w-4xl mx-auto z-0">
      <h4 className="mb-12">Location </h4>
      <MyMapComponent />
    </div>
  );
}

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

function MyMapComponent() {
  return (
    <MapContainer
      center={[59.911491, 10.757933]}
      zoom={13}
      style={{
        height: 'auto',
        width: '100%',
        minHeight: '400px',
        position: 'relative',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
