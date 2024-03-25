import { useRecoilValue, useRecoilCallback } from "recoil";
import { vehiclesFamily, vehicleIds } from "../atom/VehiclesState.js"

export const VehicleRow = (id) => {

    let data = useRecoilValue(vehiclesFamily(id.id));

    return (
        <div>{data.id + " : " + data.latitude}</div>
    )
}