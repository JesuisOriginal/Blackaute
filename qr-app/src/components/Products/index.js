import React, { Component } from 'react';
import BuyCard from '../BuyCard';


class Products extends Component {
    render() {
        if(typeof this.props.itens !== "undefined"){
            return this.props.itens.map((item) => (
                <BuyCard  />
            ));
        }else{
            return(
                <BuyCard />
            )
        }
    }
}

export default Products;
