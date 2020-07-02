import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class Mapp extends Component {

    constructor(props){
        super(props);
        this.locations = [
            {
                name: 'Minha Casa',
                coordenadas: [-8.136134, -34.901712]
            },
            {
                name: 'ekaut',
                coordenadas: [-7.966406, -34.920228]
            },
            {
                name: 'Cesar',
                coordenadas: [-8.059641, -34.872255]
            }
        ]
    }

    style = {
        container: {
            height: '600px',
            width: '800px',
            float: 'right'
        }
    }
    
    createCenter = () => {
        //needs to be chaged to fit final product
        if(this.locations.length === 1){
            console.log(this.locations.length);
            return this.locations[0].coordenadas
        }else{
            var x = 0;
            var y = 0;
            var l = this.locations.length;
            for(let i = 0; i < l; i++){
                x += this.locations[i].coordenadas[0];
                y += this.locations[i].coordenadas[1];
            }
            return [x/l, y/l];
        }
    }

    render() {
        return (
            <div style={this.style.container}>
                <Map 
                     center = {this.createCenter()}
                     zoom={10}
                     style={{ width: '100%', height: '100%'}}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {this.locations.map( element => (
                        <Marker
                            key={Math.random()}
                            position = {element.coordenadas}
                             >
                        </Marker>
                    ))}
                    {/* <Marker position={this.pos}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker> */}
                </Map>
            </div>
        )
    }
}