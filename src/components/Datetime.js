import React from 'react';
import moment from 'moment';

export default props => <span>{moment(props.value).fromNow()}</span>;
