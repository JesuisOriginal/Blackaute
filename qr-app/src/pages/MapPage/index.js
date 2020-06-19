import React, { Component } from 'react'
import View from "../../components/View";
import Mapp from "../../components/Mapp";
import { Height } from '@material-ui/icons';

class MapPage extends Component {
    render() {
        return (
            <View>
                <Mapp style={{height: '100%', width: '100%'}}/>
            </View>
        )
    }
}

export default MapPage;
