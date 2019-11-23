import React, { useState, useEffect } from 'react';
import { getStudentsByPage } from '../services/student';

export default function useStudentsByPage (page = 1, limit = 10) {
    const [resp, setResp] = useState({});
    useEffect(_ => {
        (async function () {
            const resp = await getStudentsByPage(page, limit);
            setResp(resp);
        })()
    }, [page, limit]);
    return resp;
}