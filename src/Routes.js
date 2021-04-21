import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Calculadora from './views/Calculadora'
import Home from './views/Home'
import Riscos from './views/Riscos'

function Routes() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/calculadora' component={Calculadora}/>
                    <Route exact path='/riscos' component={Riscos}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routes
