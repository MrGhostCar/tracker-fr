import './App.css';
import * as React from 'react';
import { StompSessionProvider } from "react-stomp-hooks";
import { VehiclesTable } from "./components/VehiclesTable.js"
import { PublishComponent } from "./components/PublishComponent.js";
import {RecoilRoot} from "recoil";

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <StompSessionProvider
          url={'http://localhost:5000/websocket'}>
          <VehiclesTable />
        </StompSessionProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
