import { useRecoilValue, useRecoilCallback } from "recoil";
import { vehiclesFamily, vehicleIds } from "../atom/VehiclesState.js"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export const VehicleRow = (id) => {

    let data = useRecoilValue(vehiclesFamily(id.id));

    return (
        <TableRow
            key={data.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {data.id}
            </TableCell>
            <TableCell>{data.longitude}</TableCell>
            <TableCell>{data.latitude}</TableCell>
        </TableRow>
    )
}