import React, {useCallback} from 'react';
import {BrowserRouter as Router, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * 阻塞器
 * */
export default function RouterBlockGuard (props) {
    const handleConfrim = useCallback((newPath, commit) => {
        if (props.paths.indexOf(newPath) !== -1 && props.handleConfirm) { // 如果是要阻塞的页面, 进行阻塞
            const blockMsg = typeof props.blockMsg === 'string' ? props.blockMsg : props.blockMsg(newPath);
            props.handleConfirm(blockMsg, commit);
        } else { // 如果不是要阻塞的页面, 直接通行.
            commit(true);
        }
    }, [props.handleConfirm]);
    return <Router getUserConfirmation={handleConfrim}>
        {props.children}
        <HelpBlock/>
    </Router>
}

/**
 * @param(handleConfirm): 接受一个函数handleConfirm. 在阻塞时作为getUserConfirmation的执行函数.
 * @param(paths): 要进行阻塞的路径
 * @param(blockMsg): 阻塞弹出的信息.
 * */
RouterBlockGuard.propTypes = {
    handleConfirm: PropTypes.func,
    paths: PropTypes.array,
    blockMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

/**
 * 协助抛出阻塞, 不作任何渲染。
 * 返回跳转的目标页面
 * */
function _HelpBlock ({history}) {
    history.block((newLocation) => {
        return newLocation.pathname;
    });
    return null;
}

const HelpBlock = withRouter(_HelpBlock);