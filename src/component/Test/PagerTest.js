import React, {Component} from 'react';
import Pager from '../Pager/Pager';
import Student from "../Student/Student";

class PagerTest extends Component {
    state = {
        total: 0,
        panelNumber: 5,
        limit: 6,
        current: 1,
        studentList: [],
    }
    constructor (props) {
        super(props);
        this.fetchStudents();
    }

    pageChange = (newPage) => {
        this.setState({
            current: newPage
        }, () => {
            this.fetchStudents();
        })
    }

    async fetchStudents () {
        const res = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=ym_coke_1547734580470&page=${this.state.current}&size=${this.state.limit}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        this.setState({
            total: res.cont,
            studentList: res.findByPage
        })
    }
    render() {
        const studentList = this.state.studentList.map(item => <Student {...item} key={item.id}/>);
        return (
            <div>
                <div className="student-list">
                    {studentList}
                </div>
                <div className="turn-page-container">
                    <Pager {...this.state} onPageChange={this.pageChange}/>
                </div>
            </div>
        );
    }
}

export default PagerTest;