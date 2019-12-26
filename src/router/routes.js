import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import FormRegister from '../components/form/formRegister'
import List from '../components/list/orderList'
import OderTracking from '../components/list/orderTracking'
import Cashier from '../components/list/cashier'

export default () => (
    <Switch>
        <Route path='/register' component={FormRegister}/>
        <Route path='/list' component={List}/>
        <Route path='/tracking' component={OderTracking}/>
        <Route path='/cashier' component={Cashier}/>
        <Redirect path='*' to='/register'/>
    </Switch>
)
