import { combineReducers } from 'redux'
import appReducers from '../components/list/listReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
    PDsystem: appReducers,
    form: formReducer
})

export default rootReducers