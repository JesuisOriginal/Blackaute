import React from "react";
import View from "../../components/View";
import { index } from "../../services/db/queries/barrels";

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

  render() {
    console.log(this.state.products);
    return <View></View>;
  }
}

export default ProductsPage;
