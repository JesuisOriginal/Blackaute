import React from 'react'
import ProtoMapp from './ProtoMapp';

export default function Mapp(props) {
    return (
      <div style={style}>
        <ProtoMapp 
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDHP8YWK7pR63d913cqTx4bNehzHZNCJdE"}
          loadingElement={<div style={{height: '100%'}}/>}
          containerElement={<div style={{height: '100%'}}/>}
          mapElement = {<div style={{height: '100%'}}/>}
        />
      </div>
    )
}


const style = {
    height: '530px', 
    width: '530px',
    margin: '10px'
}