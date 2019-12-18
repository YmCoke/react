import { createStore, bindActionCreators } from 'redux'
import * as actionType from './action/action-type'
import * as numberAction from './action/number-action'

// 假设数据仓库中只有一个数字
// 规定: action的type为increase时, 原数据+1, 为decrease时, 原数据-1

/**
 * @param state 之前的数据
 * @param action 一个对象, 用于描述要做什么事情
 * */
function reducer (state, action) {
    if (action.type === actionType.INCREASE) {
        return state + 1;
    } else if (action.type === actionType.DECREASE) {
        return state - 1;
    } else if (action.type === actionType.SET) {
        return action.payload;
    }
    // 返回的值会覆盖原仓库中的数据
    return state;
}

window.store = createStore(reducer, 10);

console.log(window.store.getState());

// window.store.dispatch(numberAction.getSetAction(20));
const boundActions = bindActionCreators(numberAction, window.store.dispatch);
boundActions.getSetAction(20);

console.log(window.store.getState());

