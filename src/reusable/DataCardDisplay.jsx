import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Thermometer, Droplet, Wind } from 'react-feather'; 

function DataCardDisplay() {
  return (
    <div>
      <div className='text-center'>
        <p className='text-muted'>Updated at 00:00 AM (Less than a minute ago)</p>
        <p className='text-muted'>Select a statistic to view more data.</p>
      </div>
      
    
      <div class="d-flex flex-wrap align-middle justify-content-center">
        <DataCard title="Temperature" iconBeforeTitle={<Thermometer />} value={72} unit="°F" />
        <DataCard title="Humidity" iconBeforeTitle={<Droplet />} value={"75" + "%"} />
        <DataCard title="Wind" iconBeforeTitle={<Wind />}>
          <p>Speed here</p>
        </DataCard>
      </div>
    </div>
  );
}

function DataCard(props) {
  return (
    <Card style={{ width: "fit-content", minWidth: 250 }} className="m-4 hover-grow">
      <Card.Body>
        <Card.Title>{props.iconBeforeTitle} {props.title}</Card.Title>
        <Card.Text>
          {props.children} {props.icon} {props.value} {props.unit}
        </Card.Text>
      </Card.Body>
    </Card>
  )
  
}

export default DataCardDisplay;