import { loginActionType } from '../action';

export default function loginReducer (state = {}, { type, payload }) {
    switch(type) {
        case loginActionType.SETLOGIN:
            return payload;
        default:
            return state
    }
}