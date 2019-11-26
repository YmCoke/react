import React, {useReducer, useState} from 'react';
import FadeTransition from "./index";
import {SwitchTransition, TransitionGroup} from "react-transition-group";
import uuid from "uuid";

function inReducer (state, action) {
    return action.payload;
}

// FadeTransition单独使用
export default function Test () {
    const [inProp, dispatch] = useReducer(inReducer, true);
    return (<>
        <FadeTransition in={inProp} timeout={2000} classNames="abc">
            <h1>h1 标签</h1>
        </FadeTransition>
        <button onClick={_ => {
            dispatch({type: "update", payload: !inProp});
        }}>显示/隐藏</button>
    </>)
}

// FadeTransition配合SwitchTransition使用
// export default function Test () {
//     const [inProp, dispatch] = useReducer(inReducer, true);
//     return (<>
//         <SwitchTransition>
//             <FadeTransition key={inProp} timeout={5000}>
//                 <h1>{inProp ? "显示" : "隐藏"}</h1>
//             </FadeTransition>
//         </SwitchTransition>
//         <button onClick={_ => {
//             dispatch({type: "update", payload: !inProp});
//         }}>显示/隐藏</button>
//     </>)
// }

function tasksReducer (state, action) {
    if (action.type === 'increase') {
        return [...state, action.payload];
    } else if (action.type === 'decrease') {
        return state.filter(it => it.id !== action.payload);
    }
}

// FadeTransition配合TransitionGroup使用
// export default function Test () {
//     const [tasks, dispatch] = useReducer(tasksReducer, [
//         {id: uuid(), name: "task1"},
//         {id: uuid(), name: "task2"},
//     ]);
//     return (<>
//         <TransitionGroup>
//             {tasks.map(t => (<FadeTransition key={t.id} component="ul">
//                 <li>
//                     {t.name}
//                     <button onClick={_ => {
//                         dispatch({type: "decrease", payload: t.id});
//                     }}>删除任务</button>
//                 </li>
//             </FadeTransition>))}
//         </TransitionGroup>
//         <button onClick={_ => {
//             const name = prompt("请输入任务名称");
//             dispatch({type: "increase", payload: {id: uuid(), name}});
//         }}>显示/隐藏</button>
//     </>)
// }
