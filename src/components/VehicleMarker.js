import { useRecoilValue } from "recoil";
import { vehiclesFamily } from "../atom/VehiclesState.js"
import { Marker, Popup } from 'react-leaflet'

export const VehicleMarker = ({id}) => {
    let data = useRecoilValue(vehiclesFamily(id));
    return (
        <Marker position={[data.latitude, data.longitude]}>
            <Popup>
                {id}
            </Popup>
        </Marker>
    )
}



