import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget the CSS

function Map() {
  return (
    <div className="max-w-2xl mx-auto">
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
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
    </MapContainer>
  );
}

export default Map;
