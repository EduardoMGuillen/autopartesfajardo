"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import type { Location } from "@/lib/site";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FlyTo({ location }: { location: Location | null }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 16, { duration: 1.2 });
    }
  }, [location, map]);

  return null;
}

type Props = {
  locations: Location[];
  activeId: string | null;
};

export function LocationsMap({ locations, activeId }: Props) {
  const active = locations.find((l) => l.id === activeId) ?? null;
  const center: [number, number] = [15.3945, -87.8153];

  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full min-h-[320px] w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo location={active} />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={icon}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.address}
            <br />
            <em>{loc.hours}</em>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
