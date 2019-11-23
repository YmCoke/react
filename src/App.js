import React from 'react';
import useAllStudents from './myHooks/useAllStudents'
import useStudentsByPage from "./myHooks/useStudentsByPage";

function Test () {
    const data = useAllStudents();
    console.log(data);
    const list = data.map(it => <li key={it.id}>{it.name}</li>)
    return <ul>{list}</ul>
}

function ShowStudentInfo (props) {
    const resp = useStudentsByPage(props.page, props.limit);
    const list = resp.findByPage && resp.findByPage.map(it => <li key={it.id}>{it.name}</li>);
    console.log(list);
    return <ul>
        {list}
    </ul>
}

export default function App () {
    return <div className="app">
        <ShowStudentInfo />
    </div>
}