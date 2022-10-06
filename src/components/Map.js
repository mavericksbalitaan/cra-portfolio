import { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../assets/images/icons8-map-marker-32.webp';

function Map() {
  const [lat, setLat] = useState(40.3733687);
  const [lon, setLon] = useState(71.7978217);

  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(Number(position.coords.latitude));
        setLon(Number(position.coords.longitude));
      });
    }
  });

  return (
    <>
      <MapContainer
        style={{ width: '300px', height: '200px' }}
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={myIcon}>
          <Popup>You are here.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
