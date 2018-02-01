import React from "react"
import { compose, withProps, withState, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import TiCompass from "react-icons/lib/ti/compass";

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withState("zoom", "onZoomChange", 15),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      }
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={{ lat: 37.3710764, lng: 126.9481512 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: 37.3710764, lng: 126.9481512 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div style={{ fontWeight: "bold" }}>
          <TiCompass />
          <span style={{ fontSize: "1em" }}>
            {" "}
            안양IT밸리 607호 (주) 메트로소프트
          </span>{" "}
          <br />
          <div style={{ lineHeight: "30%", padding: "5px", fontSize: "1em" }}>
            <li>
              지하철 이용시 : 금정역 2번출구 직진 200m 미니스톱 좌회전 직진
              교량통화 우측건물
            </li>
            <li>
              버스 이용시 : 4호선 범계역 6-2번 마을 LS타워 하차, 1호선 명학역
              하차 1번 출구 육교 건너서 65번 버스 이용 LS타워 하차
            </li>
          </div>
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
));

export default MapWithControlledZoom;