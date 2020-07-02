import React from "react";
import {connect} from 'react-redux';
import View from "../../components/View";
import { index } from "../../services/db/queries/barrels";
import Barrels from "../../components/Barrels";
import FabUpdate from '../../components/FabUpdate';

import {Types} from '../../store/reducers/main';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleAdd = (item) => {
    const {dispatch} = this.props;
    dispatch({type: Types.addBarrel, barrel: item});
  };

  handleGetProducts = async () => {
    this.setState({loading: true});
    await index(this.handleAdd);
    this.setState({loading: false});
  };

  componentDidMount() {
    const {barrels} = this.props;
    if(!barrels || !barrels.length) this.handleGetProducts();
  }

  handleOverflowChange(isOverflowed) {
    console.log(isOverflowed);
  }


  render() {
    const {barrels} = this.props;
    return (
        <View>
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
          </style>
          <h1 style = {headerStyle}>Detalhes dos Pedidos ativos</h1>
          <FabUpdate onClick={this.handleGetProducts} loading={this.state.loading} />
          <Barrels itens={barrels} />
          {console.log("Eu nao estou doido", barrels)}
        </View>
        
      );
  }
}

const headerStyle = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight : "bold",
  fontSize: "50px",
  lineHeight: "60px",
  color: "#1B1C1D",
  position: "relative",
  left: "15%",
}

const divStyle = {
  overflow : 'auto',
}

const mapStateToProps = ({MainReducer}) => ({
  barrels: MainReducer.barrels
})


export default connect(mapStateToProps)(ProductsPage);
