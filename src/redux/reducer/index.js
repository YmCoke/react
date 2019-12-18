import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import loginReducer from './loginReducer'

const initValue = {
    users: [],
}

// export default function reducer(state = initValue, action) {
//     const newState = {
//         users: usersReducer(state.users, action),
//         login: loginReducer(state.login, action)
//     }
//     return newState;
// }

export default combineReducers({
    users: usersReducer,
    login: loginReducer
})