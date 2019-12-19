import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import FormRegister from '../components/formRegister'

export default () => (
    <Switch>
        <Route path='/register' component={FormRegister}/>
        <Redirect path='*' to='/register'/>
    </Switch>
)
