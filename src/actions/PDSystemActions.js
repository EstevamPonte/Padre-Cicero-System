import axios from 'axios'

const URL = 'http://localhost:3004/'

export const addOrder = (registerInfo) => {
    const registerInfoWithStatus = {...registerInfo, status: 1}
    return dispatch => {
        axios.post(URL + 'register', registerInfoWithStatus)
    }
}

export const handleClientNameChange = (event) => {
    return {type: 'CLIENT_NAME_CHANDED', payload: event.target.value}
}