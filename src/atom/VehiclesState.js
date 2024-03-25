import {atom, atomFamily} from "recoil";

export const vehiclesFamily = atomFamily({
    key: 'VehiclesFamily',
    default: [],
});

export const vehicleIds = atom({
    key: "VehicleIds",
    default: []
});