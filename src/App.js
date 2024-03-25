import './App.css';
import * as React from 'react';
import {StompSessionProvider} from "react-stomp-hooks";
import {VehiclesTable} from "./components/VehiclesTable.js"
import {PublishComponent} from "./components/PublishComponent.js"

function App() {

  return (
    <div className="App">
      <StompSessionProvider
        url={'http://localhost:5000/websocket'}>
          <VehiclesTable />
          <PublishComponent />
      </StompSessionProvider>
    </div>
  );
}

export default App;
