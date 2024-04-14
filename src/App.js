import './App.css';
import * as React from 'react';
import { StompSessionProvider } from "react-stomp-hooks";
import { VehiclesTable } from "./components/VehiclesTable.js"
import { RecoilRoot } from "recoil";
import { MapDisplay } from './components/MapDisplay.js';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <StompSessionProvider
          url={'http://localhost:5000/websocket'}>
            <MapDisplay />
            <VehiclesTable />
        </StompSessionProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
