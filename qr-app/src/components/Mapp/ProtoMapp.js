import React, {useState} from 'react';
import {GoogleMap , withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as data from './data.json';
import { useSelector } from 'react-redux';

const ProtoMapp = (props) => {

    const barris = useSelector(state => state.OrdersReducer.activeBarril);
    const toggleBarril = useSelector(state => state.OrdersReducer.toggleBarril);
    const [selectedLoc, setSelectedLoc] = useState(null);

    const defaultLoc = {
        lat: -8.059487,
        lng: -34.872351
    }

    const createCenter = () => {
        try{
            let lat = 0;
            let lng = 0;
            let l = barris.length;
            for(let i = 0; i < l; i++) {
                lat += barris[i].description.coords.lat;
                lng += barris[i].description.coords.lng;
            }
            return {lat : (lat/l) , lng: (lng/l)}
        }catch(e){
            console.log(e);
        }
        return defaultLoc;
    }

    const getPos = (item) => {
        try{
            const out = {
                lat: item.description.coords.lat,
                lng: item.description.coords.lng
            }
            return out;
        }catch(e){
            console.log(e);
        }
        return defaultLoc;
    }

    let center = createCenter();

    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: center.lat , lng: center.lng}}
        >   
            {barris.map( item => (
                <Marker 
                    key={item.meta.id}
                    position={getPos(item)}
                    onClick={() => {
                        setSelectedLoc(item);
                    }}
                ></Marker>
            ))}
            {selectedLoc && (
                <InfoWindow 
                    position={{
                        lat: selectedLoc.description.coords.lat,
                        lng: selectedLoc.description.coords.lng
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

