import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer/index'
import { usersActionCreators, loginActionCreators } from './action/index';

const store = createStore(reducer);


// 测试userReducer
const boundCreators = bindActionCreators({...usersActionCreators, ...loginActionCreators}, store.dispatch);

boundCreators.createAddAction({
    id: 1,
    name: 'zym',
    age: 19
});

console.log(store.getState());

boundCreators.createUpdateAction({
    id: 1,
    user: {
        id: 1,
        name: 'zym',
        age: 20
    }
})

console.log(store.getState());

boundCreators.createDeleteAction(1);

console.log(store.getState());

// 测试loginReducer

// const boundCreators = bindActionCreators(loginActionCreators, store.dispatch);

boundCreators.createSetAction({
    id: 1,
    name: 'zym',
    age: 18
});

console.log(store.getState());
