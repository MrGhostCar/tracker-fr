import { useRecoilValue } from "recoil";
import { vehiclesFamily } from "../atom/VehiclesState.js"
import { Marker, Popup } from 'react-leaflet'

/**
 * Component representing a marker icon on the map. One for each vehicle.
 */
export const VehicleMarker = ({ id }) => {
    let data = useRecoilValue(vehiclesFamily(id));
    return (
        <Marker position={[data.latitude, data.longitude]}>
            <Popup>
                {id}
            </Popup>
        </Marker>
    )
}



