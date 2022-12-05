import { MapContainer, TileLayer, UseMap, Marker, Popup, Circle, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';
import LocalizedStrings from 'react-localization';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';



function Map(props) {
  let strings = new LocalizedStrings({
    en: {
      ow_attribution: "Weather tiles provided by OpenWeather. Statistics provided by local station.",
      ost_attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }
  })

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

  var keys = 1
  function getKey() {
    keys++;
    return keys;
  }

  return (
    <>
    <MapContainer center={position} zoom={7.5} scrollWheelZoom={false} className="rounded map" whenCreated={setMap}>
      <div style={{ backgroundColor: "#000000", width: "100%", height: "100%", position: "absolute", top: 0, bottom: 0 }}><p>aaaaa</p></div>

      <TileLayer attribution={strings.ost_attribution} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <TileLayer url='http://maps.openweathermap.org/maps/2.0/weather/WND/{z}/{x}/{y}?appid=693cc9f691e3f528276a72f6802204a8' />
      <TileLayer url='http://tile.openweathermap.org/map/rain/{z}/{x}/{y}.png?appid=693cc9f691e3f528276a72f6802204a8' attribution={strings.ow_attribution}  />
      
      

      <FeatureGroup ref={featureGroupRef}>


        { strikeData.map(s => {
          if (s >= 35) {
            return <StrikeCircle center={position} color="green" distance={s} key={getKey()} />
          } else if (s > 10 && s < 35) {
            return <StrikeCircle center={position} color="yellow" distance={s} key={getKey()} />
          } else if (s <= 10) {
            return <StrikeCircle center={position} color="red" distance={s} key={getKey()} />
          }
          return null;
        })}
      </FeatureGroup>
    </MapContainer>
    </>
    
  )
}

function StrikeCircle(props) {
  let strings = new LocalizedStrings({
    en: {
      detected: "Lightning strike detected approximately {DIST} away.",
      halt: "Halt outdoor activities and movement.",
      prepare: "Be prepared to halt outdoor activities and movement. Continue to monitor moving storms.",
      monitor: "Monitor moving storms."
    }
  })

  return (
    <Circle center={props.center} pathOptions={{ fillColor: props.color, color: props.color }} radius={props.distance * 1609} stroke={true} opacity={0.3}>
        <Popup>{strings.detected.replace("{DIST}", props.distance)} { (props.distance < 10) ? strings.halt : (props.distance < 35) ? strings.prepare : strings.monitor}</Popup>
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