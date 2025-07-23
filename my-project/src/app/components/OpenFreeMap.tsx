"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface OpenFreeMapProps {
  coordinates: [number, number]; // [lng, lat]
  zoom?: number;
  pitch?: number;
  bearing?: number;
}

const OpenFreeMap: React.FC<OpenFreeMapProps> = ({
  coordinates,
  zoom = 5,
  pitch = 45,
  bearing = -17.6,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: coordinates,
      zoom,
      pitch,
      bearing,
    });

    new maplibregl.Marker({ color: "#d00" }).setLngLat(coordinates).addTo(map);

    return () => map.remove();
  }, [coordinates, zoom, pitch, bearing]);

  return (
    <div
      ref={mapRef}
      className="h-64 md:h-[500px] w-full rounded-xl overflow-hidden shadow-md"
      aria-label="Open Free Map"
    />
  );
};

export default OpenFreeMap;
