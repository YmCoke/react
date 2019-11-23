import React, { useReducer, useState, useEffect } from 'react';
import { getStudentsByPage } from '../services/student';

// export default function useStudentsByPage (page = 1, limit = 10) {
//     const [resp, setResp] = useState({});
//     useEffect(_ => {
//         (async function () {
//             console.log(page, limit);
//             const resp = await getAllStudents(page, limit);
//             // setResp(resp);
//         })()
//     }, [page, limit]);
//     return resp;
// }

function reducer (state, action) {
    return action.payload;
}

export default function useStudentsByPage (page = 1, limit = 10) {
    const [resp, dispatch] = useReducer(reducer, {});
    useEffect(_ => {
        (async function () {
            const data = await getStudentsByPage(page, limit);
            dispatch({type: "update", payload: data});
        })()
    }, [page, limit]);
    return resp;
}