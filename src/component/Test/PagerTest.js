import React, {Component} from 'react';
import Pager from '../Pager/Pager';

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
    }

    fetchStudents () {

    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default PagerTest;