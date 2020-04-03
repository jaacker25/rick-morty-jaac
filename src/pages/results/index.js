import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class Results extends Component{
render(){
    const {results}=this.props;

    return(<Page 
        results={results}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        items: state.items,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(Results);

export default withRouter(component);