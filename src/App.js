import './App.css';
import * as React from 'react';
import { StompSessionProvider } from "react-stomp-hooks";
import { NotificationsTable } from "./components/NotificationsTable.js"
import { RecoilRoot } from "recoil";
import { MapDisplay } from './components/MapDisplay.js';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <StompSessionProvider
          url={'http://localhost:5000/websocket'}>
            <MapDisplay />
            <NotificationsTable />
        </StompSessionProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
