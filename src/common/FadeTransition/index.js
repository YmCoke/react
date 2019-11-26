import React from 'react';
import {CSSTransition} from "react-transition-group";
import "./index.css";

export default function FadeTransition (props) {

    function addTransition (node) {
        node.style.transition = `opacity ${props.timeout}ms`;
    }

    function removeTransition (node) {
        node.style.transition = "";
    }

    return (<CSSTransition {...props} classNames="fade"
        onEnter={addTransition}
        onExit={addTransition}
        onEntered={(node, isAppearing) => {
            removeTransition(node);
            props.onEntered && props.onEntered(node, isAppearing);
        }}
        onExited={node => {
            removeTransition(node);
            props.onExited && props.onExited(node);
        }}
    >
        {props.children}
    </CSSTransition>)
}

FadeTransition.defaultProps = {
    timeout: 500
}


// 当FadeTransition接收一个class类名时, 会因为props传递, 导致CSSTransition的类名受外界控制.
// 会让我们的css类名不匹配.

// 解决方案: 禁止传入class类名(或传入无效), 在CSSTransition解构props的后, 覆盖掉className的值.