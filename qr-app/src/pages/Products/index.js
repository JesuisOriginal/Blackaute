import React from "react";
import View from "../../components/View";
import { index } from "../../services/db/queries/barrels";
import Barrels from "../../components/Barrels";
import OverflowScrolling from 'react-overflow-scrolling';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleAdd = (item) => {
    this.setState({ products: [...this.state.products, item] });
  };

  handleGetProducts = async () => {
    await index(this.handleAdd);
  };

  componentDidMount() {
    this.handleGetProducts();
  }

  handleOverflowChange(isOverflowed) {
    console.log(isOverflowed);
  }


  render() {
    console.log(this.state.products);
    return (
       
        <View>
            <div style={divStyle}>
              <Barrels itens={this.state.products}/>
            </div>

        </View>
        
      );
  }
}

const divStyle = {
  overflowY : 'scroll',
}


export default ProductsPage;
