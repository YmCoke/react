import React, {Component} from 'react';

class Student extends Component {
    render() {
        return (
            <li>
                【姓名】{this.props.name}
                【年龄】{new Date().getFullYear() - this.props.birth}
                【性别】{this.props.sex == '0' ? '男' : '女'}
            </li>
        );
    }
}

export default Student;