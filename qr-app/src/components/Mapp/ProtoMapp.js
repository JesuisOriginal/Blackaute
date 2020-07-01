import React, {useState} from 'react';
import {GoogleMap , withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as data from './data.json';
import { useSelector } from 'react-redux';

const ProtoMapp = (props) => {

    const barris = useSelector(state => state.OrdersReducer.activeBarril);
    const [selectedLoc, setSelectedLoc] = useState(null);

    const createCenter = () => {
        console.log(barris, [1,2,3,4]);
        let lat = 0;
        let lng = 0;
        let l = barris.length;
        for(let i = 0; i < l; i++) {
            lat += barris[i].description.coord.lat;
            lng += barris[i].description.coord.lng;
        }
    
        return {lat : (lat/l) , lng: (lng/l)}
    }

    let center = createCenter();

    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter= {{lat: center.lat , lng: center.lng}}
        >
            {barris.map( item => (
                <Marker 
                    key={item.meta.id}
                    position={{
                        lat: item.description.coord.lat,
                        lng: item.description.coord.lng
                    }}
                    onClick={() => {
                        setSelectedLoc(item);
                    }}
                ></Marker>
            ))}
            {selectedLoc && (
                <InfoWindow 
                    position={{
                        lat: selectedLoc.description.coord.lat,
                        lng: selectedLoc.description.coord.lng
                    }}
                    onCloseClick={() => {
                        setSelectedLoc(null);
                    }}
                >
                    <div>
                        <h1>{selectedLoc.content.name}</h1>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

export default withScriptjs(withGoogleMap(ProtoMapp));

