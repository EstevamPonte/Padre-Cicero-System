import { combineReducers } from 'redux'
import appReducers from './PDSystemReducers'
const rootReducers = combineReducers({
    PDsystem: appReducers
})

export default rootReducers