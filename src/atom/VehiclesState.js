import { atom, atomFamily } from "recoil";

/*
    Recoil state stores. 
    A family can store any number of atoms, one for each key. A key is ususally the id of the object.
    An atom can store only one value.
*/

export const vehiclesFamily = atomFamily({
    key: 'VehiclesFamily',
    default: [],
});

export const notificationsFamily = atomFamily({
    key: 'NotificationsFamily',
    default: []
})

export const vehicleIds = atom({
    key: "VehicleIds",
    default: []
});