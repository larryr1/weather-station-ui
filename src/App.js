import './App.css';
import Topnav from './reusable/Topnav';
import LightningWarning from './reusable/LightningWarning';
import DataCardDisplay from './reusable/DataCardDisplay';
import Map from './reusable/Map';
import StrikeDataBar from './reusable/StrikeDataBar';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [apiData, setApiData] = useState({});



  return (
    <div className="App">
      <Topnav />

      <div className='pt-3'>
        <div className='text-center'>
          <h1>Current Weather</h1>
        </div>

        <Map strikes={[5]} />

        <div className='mt-3'>{ apiData ? DataCardDisplay() : loadingApi() }</div>
      </div>
    </div>
  );
}

function loadingApi() {
  return (
    <div className='text-center'><p>Fetching data from API at <code>https://scpawapi.glitch.me</code></p><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default App;