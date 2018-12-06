import React from 'react'
import Sidebar from 'components/App/Sidebar'
import My from 'components/My'
import Cpy from 'components/Cpy'
import FE from 'components/FE'
import RealMadrid from 'components/RealMadrid'

import { Switch, Route } from 'react-router'

import style from './style.css'

const App = () => {
    return <div className={style.root}>
        <div className={style.sidebar}>
            <Sidebar />        
        </div>
        <div className={style.content}>
            <Switch>
                <Route path='/my' component={My} />
                <Route path='/cpy' component={Cpy} />
                <Route path='/fe' component={FE} />
                <Route path='/rm' component={RealMadrid} />
            </Switch>
        </div>
    </div>
}

export default App
