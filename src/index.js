import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './component/Pager/Pager';

ReactDOM.render(<Pager current={4} total={20} limit={5} panelNumber={5}/>, document.getElementById('root'));