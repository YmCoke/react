import { usersActionType } from '../action/index';

export default function usersReducer(state = [], { type, payload }) {
    switch (type) {
        case usersActionType.ADDUSER:
            return [...state, payload];
        case usersActionType.DELETEUSER:
            return state.filter(it => it.id !== payload);
        case usersActionType.UPDATEUSER:
            return state.map(it => it.id === payload.id ? payload.user : it);
        default:
            return state;
    }
}