import React from 'react';
import {withRouter, useHistory} from 'react-router-dom'

const NotFound=()=>{
let history=useHistory();
return(<>{history.push("/")}</>)
}

export default NotFound