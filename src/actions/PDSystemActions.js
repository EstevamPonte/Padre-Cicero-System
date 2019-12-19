import axios from 'axios'

const URL = 'http://localhost:3004/'

export const addOrder = (registerInfo) => {
    return dispatch => {
        axios.post(URL + 'register', registerInfo)
    }
}

export const handleClientNameChange = (event) => {
    return {type: 'CLIENT_NAME_CHANDED', payload: event.target.value}
}