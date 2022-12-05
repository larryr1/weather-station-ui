import './App.css';
import Topnav from './reusable/Topnav';
import LightningWarning from './reusable/LightningWarning';
import DataCardDisplay from './reusable/DataCardDisplay';
import Map from './reusable/Map';
import StrikeDataBar from './reusable/StrikeDataBar';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import LoadingData from './reusable/LoadingData';
import LocalizedStrings from 'react-localization';
import PeriodicFetch from './reusable/PeriodicFetch';

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    console.log("Fetching data")
    fetch("/api/latest").then(response => {
      response.text().then(text => {
        console.log("Got API Data: " + text);
        setApiData(JSON.parse(text));
      }).catch(reason => {

      });
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
  
          <Map strikes={[15]} />
  
          <div className='mt-3'><DataCardDisplay data={apiData} /></div>
        </div>
      </div>
    );
  }
}

export default App;