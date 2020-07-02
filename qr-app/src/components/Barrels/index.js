import React, { Component } from 'react';
import BarrelCard from './barrelCard';


class Barrels extends Component {
    render() {
        console.log("não estou ficando louco")
        if(typeof this.props.itens !== "undefined"){
            return this.props.itens.map((item) => (
                <BarrelCard key={Math.random()} barril={item}/>
            ));
        }else{
            return(
                <BarrelCard key={27} id={404}/>
            )
        }
    }
}

export default Barrels;
