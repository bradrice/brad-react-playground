import React, {useRef} from 'react'
import Menu from './Menu/Menu';
import Panel from './Panel/Panel';
import Transform from './Transform/Transform';


export function App() {

    
    return (
        <div>
            <Menu />
            {/*<h1>Welcome</h1>*/}
            <Transform />
    <Panel />
        </div>

    )
}