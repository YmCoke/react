import React, { useState, useEffect } from 'react';
import { getAllStudents } from '../services/student';
/**
 * 获取全部的学生信息
 * */

export default function useAllStudents () {
    const [stus, setStus] = useState([]);
    useEffect(_ => {
        (async function () {
            const data = await getAllStudents();
            setStus(data);
        })()
    }, []);
    return stus;
}