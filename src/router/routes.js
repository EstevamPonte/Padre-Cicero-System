import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import FormRegister from '../components/form/formRegister'
import List from '../components/list/orderList'

export default () => (
    <Switch>
        <Route path='/register' component={FormRegister}/>
        <Route path='/list' component={List}/>
        <Redirect path='*' to='/register'/>
    </Switch>
)
