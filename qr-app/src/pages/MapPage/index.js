import React, { Component } from 'react'
import View from "../../components/View";
//import Mapp from "../../components/Mapp";
import Pedidos from "../../components/Pedidos";

class MapPage extends Component {
    render() {
        return (
            <View>
                {/* <Mapp style={{height: '100%', width: '100%'}}/> */}
                <Pedidos />
            </View>
        )
    }
}

export default MapPage;
