import './App.css';
import Topnav from './reusable/Topnav';
import LightningWarning from './reusable/LightningWarning';
import DataCardDisplay from './reusable/DataCardDisplay';
import Map from './reusable/Map';
import StrikeDataBar from './reusable/StrikeDataBar';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import LoadingData from './reusable/LoadingData';

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    console.log("Fetching data")
    fetch("/api/latest.json").then(response => {
      console.log("Got data")
      let data = JSON.parse(response.text);
      setApiData(data);
      console.log("API Data: " + JSON.stringify(data));
    }).catch(reason => {
      //alert("Error fetching system data.")
    })
  }, []);

  if (!apiData) {
    return <LoadingData as="h3" />
  } else {
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