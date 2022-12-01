import { MapContainer, TileLayer, UseMap, Marker, Popup, Circle, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';



function Map(props) {
  const position = [27.337293, -80.398054];

  const [map, setMap] = useState(null);
  const featureGroupRef = useRef();

  useEffect(() => {
    if (!map) return;
    map.fitBounds(featureGroupRef.current.getBounds());
  }, [map]);

  var strikeData = props.strikes;
  strikeData.sort(function(a, b) {
    return b - a;
  });

  return (
    <>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "60vh", width: "60vw", margin: "auto" }} className="rounded" whenCreated={setMap}>
      <div style={{ backgroundColor: "#000000", width: "100%", height: "100%", position: "absolute", top: 0, bottom: 0 }}><p>aaaaa</p></div>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <TileLayer url='http://maps.openweathermap.org/maps/2.0/weather/WND/{z}/{x}/{y}?appid=693cc9f691e3f528276a72f6802204a8'  />
      <TileLayer url='http://tile.openweathermap.org/map/rain/{z}/{x}/{y}.png?appid=693cc9f691e3f528276a72f6802204a8' attribution='Weather data provided by OpenWeather.'  />
      
      

      <FeatureGroup ref={featureGroupRef}>
        { strikeData.map(s => {
          if (s >= 35) {
            return <StrikeCircle center={position} color="green" distance={s} />
          } else if (s > 10 && s < 35) {
            return <StrikeCircle center={position} color="yellow" distance={s} />
          } else if (s <= 10) {
            return <StrikeCircle center={position} color="red" distance={s} />
          }
          return null;
        })}
      </FeatureGroup>
      
      
    </MapContainer>
    </>
    
  )
}

function StrikeCircle(props) {
  return (
    <Circle
        center={props.center}
        pathOptions={{ fillColor: props.color, color: props.color }}
        radius={props.distance * 1609}
        stroke={true}
        opacity={0.3}
      >
        <Popup>Lightning strike detected approximately {props.distance} miles away. { (props.distance < 10) ? "Halt outdoor activities and movement." : (props.distance < 35) ? "Be prepared to halt outdoor activities and movement. Continue to monitor moving storms." : "Monitor moving storms."}</Popup>
    </Circle>
  )
}

const schoolIcon = L.Icon.extend({
  options: {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/855/855601.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  }
});

export default Map;