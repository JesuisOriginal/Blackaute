import React, { Component } from 'react';
import BarrelCard from '../BarrelCard';


class Barrels extends Component {
    render() {
        if(typeof this.props.itens !== "undefined"){
            return this.props.itens.map((item) => (
                <BarrelCard key={Math.random()} tipo={item.tipo} rem={item.remetente} id={item.hash}/>
            ));
        }else{
            return(
                <BarrelCard key={27} id={404}/>
            )
        }
    }
}

export default Barrels;
