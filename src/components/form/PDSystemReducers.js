const INITIAL__STATE = {
    clientName: '',
    clientCPF: '',
    description: ''
}


export default (state = INITIAL__STATE, action) => {
    switch(action.type){
        case 'CLIENT_NAME_CHANDED':
            return {...state, clientName: action.payload}
        default:
            return state
    }
}