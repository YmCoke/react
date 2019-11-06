import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Student extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        birth: PropTypes.number.isRequired,
        sex: PropTypes.oneOf([0, 1, '0', '1'])
    }

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