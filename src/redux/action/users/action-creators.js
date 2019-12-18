import * as action from './action-type'

export function createAddAction (user) {
    return {
        type: action.ADDUSER,
        payload: user
    }
}

export function createDeleteAction (id) {
    return {
        type: action.DELETEUSER,
        payload: id
    }
}

export function createUpdateAction (user) {
    return {
        type: action.UPDATEUSER,
        payload: user
    }
}