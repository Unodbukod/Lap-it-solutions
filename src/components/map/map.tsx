'use client'

// Import Leaflet outside of the component
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    // Ensure Leaflet code runs only in the browser
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const icon = new L.Icon({
          iconUrl: "/about/location.png",
          iconSize: [30, 30],
        });
        setCustomIcon(icon);
      });
    }
  }, []);

  return (
    <MapContainer center={[7.068593, 125.61187]} zoom={20} style={{ height: '400px', width: '600px', borderRadius: '10px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {customIcon && (
        <Marker position={[7.068593, 125.61187]} icon={customIcon}>
          <Popup>
            LAP IT SOLUTIONS INC.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
