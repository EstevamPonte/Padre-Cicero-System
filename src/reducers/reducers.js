import { combineReducers } from 'redux'
import appReducers from '../components/form/PDSystemReducers'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
    PDsystem: appReducers,
    form: formReducer
})

export default rootReducers