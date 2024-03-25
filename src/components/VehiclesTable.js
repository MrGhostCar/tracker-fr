import { useState } from 'react';
import { useSubscription } from "react-stomp-hooks";

export const VehiclesTable = () => {

  const [message, setMessage] = useState("");
  const [map, setMap] = useState(new Map());

  // Subscribe to the topic that we have opened in our spring boot app
  useSubscription('/topic/vehicle', (message) => {
    setMessage(message.body);

  });

  return (
    <div> The broadcast message from websocket broker is {message}</div>
  );
}