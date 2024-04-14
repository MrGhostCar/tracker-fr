import { useRecoilValue } from "recoil";
import { notificationsFamily } from "../atom/VehiclesState.js"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export const VehicleRow = ({id}) => {
    let data = useRecoilValue(notificationsFamily(id));

    return (
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{id}</TableCell>
            <TableCell>{data.message}</TableCell>
        </TableRow>
    )
}