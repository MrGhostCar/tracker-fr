import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

function App() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count+1);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={count}
      />
    </div>
  );
}

export default App;
