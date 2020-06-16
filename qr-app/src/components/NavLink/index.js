import React from 'react';
import {useHistory} from 'react-router-dom';

export default function NavLink({to,params,content}) {
    const history = useHistory();

    function handleNavigate() {
        history.push(to,params);
    }

    return(
        <div onClick={to ? handleNavigate : null}>
            {content ? content : null}
        </div>
    )
} 