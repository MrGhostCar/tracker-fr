import { useRecoilValue } from "recoil";
import { VehicleMarker } from "./VehicleMarker.js";
import { MapContainer, TileLayer } from 'react-leaflet'
import { vehicleIds } from "../atom/VehiclesState.js"

export const MapDisplay = (id) => {

  const ids = useRecoilValue(vehicleIds);
  var vehiclesMarkers = ids.map(element => <VehicleMarker id={element} />)

  return (
    <MapContainer center={[47.47581, 19.05749]} zoom={17} scrollWheelZoom={false} style={{ height: 500 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehiclesMarkers}
    </MapContainer>
  )

}
