import React, {useCallback} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RouterBlockGuard from "./RouterBlockGuard";
// import RouterListenGuard from './RouterListenGuard';

function Page1 () {
    return <h1>Page1</h1>
}

function Page2 () {
    return <h1>Page2</h1>
}

// 监听器
// var count = 0;
// export default function App () {
//     return (<Router>
//         <nav className="nav">
//             <Link to="/page1">page1</Link>
//             <Link to="/page2">page2</Link>
//         </nav>
//         <RouterListenGuard onChange={(location, newLocation, action, unListen) => {
//             console.log("多重监听之一");
//             count++;
//             if (count === 5) { // 当路径改变5次后, 不再监听
//                 unListen();
//             }
//         }}/>
//         <RouterListenGuard onChange={(location, newLocation, action, unListen) => {
//             console.log("多重监听之二");
//         }}/>
//         <Route path="/page1" component={Page1}/>
//         <Route path="/page2" component={Page2}/>
//     </Router>)
// }


// 阻塞器
export default function App () {
    const blockCallback = useCallback((msg, callback) => {
        if (window.confirm(msg)) {
            callback(true);
        }
    });
    return (<RouterBlockGuard handleConfirm={blockCallback} paths={['/page1']} blockMsg={newPath => `是否跳转到${newPath}页面`}>
        <nav className="nav">
            <Link to="/page1">page1</Link>
            <Link to="/page2">page2</Link>
        </nav>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
    </RouterBlockGuard>)
}