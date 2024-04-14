import { useSubscription } from "react-stomp-hooks";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { vehiclesFamily, vehicleIds, notificationsFamily } from "../atom/VehiclesState.js"
import { VehicleRow } from './VehicleRow.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const NotificationsTable = () => {
  const ids = useRecoilValue(vehicleIds);

  const setVehiclePos = useRecoilCallback(({ set }) => (newMessage, ids) => {
    if (!ids.includes(newMessage.id))
      set(vehicleIds, currVal => [...currVal, newMessage.id]);
    set(vehiclesFamily(newMessage.id), newMessage);
  });

  const setNotification = useRecoilCallback(({ set }) => (newMessage, ids) => {
    set(notificationsFamily(newMessage.id), newMessage);
  });

  useSubscription('/topic/vehicle', (message) => {
    const vehicle = JSON.parse(message.body);
    setVehiclePos(vehicle, ids);
  });

  useSubscription('/topic/notification', (message) => {
    const noti = JSON.parse(message.body);
    setNotification(noti, ids);
  });

  var renderedOutput = ids.map(id => <VehicleRow key={id} id={id} />)

  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <colgroup>
            <col width="50%" />
            <col width="50%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell>Last Notification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderedOutput}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}