import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Leaflet marker fix for default icon
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapWithDetailsSectionProps {
  coordinates: [number, number]; // [latitude, longitude]
  title: string;
  bulletpoints: string[];
  zoom?: number;
}

const MapWithDetailsSection: React.FC<MapWithDetailsSectionProps> = ({
  coordinates,
  title,
  bulletpoints,
  zoom = 13,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-12 items-stretch">
      {/* Map */}
      <div className="h-64 md:h-auto md:w-1/2 rounded-xl overflow-hidden shadow-md">
        <MapContainer
          center={coordinates}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Text content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <ul className="list-disc list-inside space-y-1">
          {bulletpoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapWithDetailsSection;
