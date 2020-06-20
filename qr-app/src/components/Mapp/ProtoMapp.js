import React, {useState} from 'react';
import {GoogleMap , withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as data from './data.json';


const createCenter = () => {
    let lat = 0;
    let lng = 0;
    let l = data.locations.length;
    for(let i = 0; i < l; i++) {
        lat += data.locations[i].coord.lat;
        lng += data.locations[i].coord.lng;
    }

    return {lat : (lat/l) , lng: (lng/l)}
}


function LambdaMap() {
    const [selectedLoc, setSelectedLoc] = useState(null);
    let center = createCenter();
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter= {{lat: center.lat , lng: center.lng}}
        >
            {data.locations.map( item => (
                <Marker 
                    key={item.id}
                    position={{
                        lat: item.coord.lat,
                        lng: item.coord.lng
                    }}
                    onClick={() => {
                        setSelectedLoc(item);
                    }}
                    // icon={{
                    //     url : ''
                    // }}
                ></Marker>
            ))}
            {selectedLoc && (
                <InfoWindow 
                    position={{
                        lat: selectedLoc.coord.lat,
                        lng: selectedLoc.coord.lng
                    }}
                    onCloseClick={() => {
                        setSelectedLoc(null);
                    }}
                >
                    <div>
                        <h1>{selectedLoc.name}</h1>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

let ProtoMapp  = withScriptjs(withGoogleMap(LambdaMap));

export default ProtoMapp;

