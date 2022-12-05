import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Thermometer, Droplet, Wind } from 'react-feather'; 

function DataCardDisplay(props) {
  function timeAgo(time) {
   
  }

  return (
    <div>
      <div className='text-center'>
        <p className='text-muted'>Select a statistic to view more data.</p>
      </div>
      
    
      <div className="d-flex flex-wrap align-middle justify-content-center">
        <DataCard title="Temperature" iconBeforeTitle={<Thermometer />} value={props.data.temperature} unit="°F" />
        <DataCard title="Humidity" iconBeforeTitle={<Droplet />} value={props.data.humidity + "%"} />
        <DataCard title="Wind" iconBeforeTitle={<Wind />} value={props.data.windSpeed + " MPH"} />
      </div>
    </div>
  );
}

function DataCard(props) {
  return (
    <Card style={{ width: "fit-content", minWidth: 250 }} className="m-4 hover-grow">
      <Card.Body>
        <Card.Title>{props.iconBeforeTitle}{props.title}</Card.Title>
        <Card.Text>{props.icon}{props.value}{props.unit}</Card.Text>
      </Card.Body>
    </Card>
  )
  
}

export default DataCardDisplay;