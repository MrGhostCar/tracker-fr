import { useRecoilValue } from "recoil";
import { VehicleMarker } from "./VehicleMarker.js";
import { MapContainer, TileLayer } from 'react-leaflet'
import { vehicleIds } from "../atom/VehiclesState.js"

/**
 * Component for displaying the leaflet map.
 */
export const MapDisplay = () => {

  const budapestScienceParkCoordinates = [47.47581, 19.05749];
  const ids = useRecoilValue(vehicleIds);

  var vehiclesMarkers = ids.map(id => <VehicleMarker key={id} id={id} />)

  return (
    <MapContainer center={budapestScienceParkCoordinates} zoom={17} scrollWheelZoom={false} style={{ height: 500 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehiclesMarkers}
    </MapContainer>
  )

}
