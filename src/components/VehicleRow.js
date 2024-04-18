import { useRecoilValue } from "recoil";
import { notificationsFamily } from "../atom/VehiclesState.js"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

/**
 * Component for one notification row in the notification table.
 */
export const VehicleRow = ({ id }) => {
    let data = useRecoilValue(notificationsFamily(id));

    return (
        <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{data.message}</TableCell>
        </TableRow>
    )
}