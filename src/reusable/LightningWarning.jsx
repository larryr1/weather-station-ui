import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React from 'react';

function LightningWarning(props) {
  /*return (
    <Card style={{ width: "75vw", margin: "auto" }} className="mt-3">
      <Card.Header as="h5" className='bg-danger text-light'>Urgent Weather</Card.Header>
      <Card.Body style={{ background: "#ffc1c7"}}>
        <Card.Title>Lightning strike detected</Card.Title>
        <Card.Text>
          <b>Warning:</b> Lightning strike detected 3.45 miles away.
        </Card.Text>
        <Button variant="primary">View Map and Strike Data</Button>
      </Card.Body>
    </Card>
  )*/

    return (
      <Alert variant="danger">
        <Alert.Heading>Severe Weather - Do Not Dismiss</Alert.Heading>
        <p>
          Lightning strike within 10 miles and windspeeds above 35 mph detected.
        </p>
      </Alert>
    );
  }

export default LightningWarning;