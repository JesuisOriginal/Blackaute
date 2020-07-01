import React, { useState } from 'react';
import {Tabs} from '@material-ui/core';
import './styles.css';

export default function SideNav(props) {
    const [value, setValue] = useState(0);

    return(
        <div style={styles.container} className='nav_container'>
            <div className='nav_logo'>

            </div>
            <div className='nav_ops'>
                
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: '100%',
        width: '8rem',
        backgroundColor:'white'
    },
    logo: {

    },
    opts: {

    }, 
    item: {

    }

};

// .nav_container {
//     height: 100%;
//     width: 8rem;
//     background-color: white;
// };

// .nav_logo {
//     height: 200px;
//     width: auto;
// }

// .nav_opts {
    
// }

// .nav_item {
//     color: #c8c8c8;
//     height: 100px;
//     width: 100%;
//     padding-top: 10px;
//     padding-bottom: 10px;
//     padding-left: 5px;
//     padding-right: 5px;
// };

// .nav_item :hover {
//     color: yellow;
// }