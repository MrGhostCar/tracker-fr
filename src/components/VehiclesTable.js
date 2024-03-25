import { useState } from 'react';
import { useSubscription } from "react-stomp-hooks";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { vehiclesFamily, vehicleIds } from "../atom/VehiclesState.js"
import { VehicleRow } from './VehicleRow.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const VehiclesTable = () => {

  const [map, setMap] = useState(new Map());

  const ids = useRecoilValue(vehicleIds);

  const setListItems = useRecoilCallback(({ set }) => (newMessage, ids) => {
    //console.log(ids[0] + "||" +newMessage.id);
    //console.log(newMessage);
    //console.log(typeof ids[0] + "||" + typeof newMessage.id);
    if (!ids.includes(newMessage.id))
      set(vehicleIds, currVal => [...currVal, newMessage.id]);
    set(vehiclesFamily(newMessage.id), newMessage);
  });

  // Subscribe to the topic that we have opened in our spring boot app
  useSubscription('/topic/vehicle', (message) => {
    const vehicle = JSON.parse(message.body);
    setListItems(vehicle, ids);
  });

  //var renderedOutput = ids.map(id => <div> {useRecoilValue(vehiclesFamily(id)).latitude} </div>)
  var renderedOutput = ids.map(element => <VehicleRow id={element} />)
  //console.log(ids);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <colgroup>
            <col width="60%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell >longitude</TableCell>
              <TableCell >latitude</TableCell>
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