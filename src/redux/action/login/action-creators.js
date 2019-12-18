import * as actionType from './action-type'

export function createSetAction (user) {
    return {
        type: actionType.SETLOGIN,
        payload: user
    }
}