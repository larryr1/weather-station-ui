import { Spinner } from "react-bootstrap";
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 en: {
   loading: "Fetching data"
 }
});

function LoadingData(props) {
  const { as: Component, hide } = props;
  if (hide) { return; }

  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <Component>{strings.loading}</Component>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoadingData;