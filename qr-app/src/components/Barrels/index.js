import React, { Component } from 'react';
import BarrelCard from '../BarrelCard';


class Barrels extends Component {
    render() {
        if(typeof this.props.itens !== "undefined"){
            console.log('I SHOLD NOT BE WORKIN');
            console.log(typeof this.props.itens !== "undefined");
            console.log('I SHOLD NOT BE WORKIN');

            return this.props.itens.map((item) => (
                <BarrelCard key={Math.random()} tipo={item.tipo} rem={item.remetente}/>
            ));
        }else{
            return(
                <BarrelCard key={27} id={404}/>
            )
        }
    }
}

export default Barrels;
