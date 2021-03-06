import axios from 'axios'
import { initialize } from 'redux-form'
const URL = 'http://localhost:3004/'

export const addOrder = (registerInfo) => {
    const registerInfoWithStatus = {...registerInfo, status: "red", date: Date.now()}
    return dispatch => {
        axios.post(URL + 'register', registerInfoWithStatus)
    }
}

export const getOrder = () => {
    const request = axios.get(URL + 'register')
    return {
        type: 'PADRE_CICERO_FETCHED',
        payload: request
    }
}

export const updateStatus = (client) => {
    if(client.status === 'red') {
        client.status = 'yellow'
    }else if (client.status === 'yellow') {
        client.status = 'green'
    }else if (client.status === 'green'){
        client.status = 'blue'
    }else{
        client.status = 'pago'
    }
    return dispatch => {
        axios.put(`${URL}register/${client.id}`, client)
            .then(resp => dispatch(getOrder()))
    }
}

export const addOnExcluded = (client) => {
    const id = client.id
    delete client.id
    return dispatch => {
        axios.post(URL + 'excluded', client)
            .then(resp => dispatch(removeOnRegister(id)))
        }
    }
    
const removeOnRegister = (id) => {
    return dispatch => {
        axios.delete(`${URL}register/${id}`)
            .then(resp => dispatch(getOrder()))
            
    }
}

export const showInfo = (value) => {
    return [
        initialize('padreCiceroForm', value)
    ]
}

