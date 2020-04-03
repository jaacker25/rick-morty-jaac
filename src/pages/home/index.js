import './style.css';
import React,{Component} from 'react';
import Page from './page';

class Home extends Component{
render(){
    const {items}=this.props;

    return(<Page />

    )
}
}
export default Home;