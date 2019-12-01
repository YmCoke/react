import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * 导航守卫之监听
 * 不作任何渲染, 只用于路径的监听
 *
 * */
function RouterListenGuard ({history, location, onChange}) {
    useEffect(() => {
        const unListen = history.listen((newLocation, action) => {
            /* 常用于做日志, 记录页面跳转信息. */
            console.log(`页面从${location.pathname}跳转到${newLocation.pathname}. 方式: ${action}`);

            /* 若传入onChange函数, 执行该函数 */
            onChange && onChange(location, newLocation, action, unListen);
        })
        return _ => {
            unListen();
            // 该组件卸载时, 取消监听.
        }
    }, []);
    return null;
}

RouterListenGuard.propTypes = {
    onChange: PropTypes.func
}

export default withRouter(RouterListenGuard)