import React from "react";
import View from "../../components/View";
import { index } from "../../services/db/queries/barrels";
import Barrels from "../../components/Barrels";

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
          <Barrels itens={this.state.products}/>
        </View>
        
      );
  }
}

const divStyle = {
  overflow : 'scroll',
}


export default ProductsPage;
