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
          <FabUpdate onClick={this.handleGetProducts} loading={this.state.loading} />
          <Barrels itens={barrels} />
        </View>
        
      );
  }
}

const divStyle = {
  overflow : 'auto',
};

const mapStateToProps = ({MainReducer}) => ({
  barrels: MainReducer.barrels
});

// const mapDispatchToProps = dispatch => ({
//   addBerrls: () => 
// })


export default connect(mapStateToProps)(ProductsPage);
