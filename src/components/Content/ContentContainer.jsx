import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import {  getPosters,setSearchValue } from '../../redux/reducer';

class ContentContainer extends React.PureComponent{

    componentDidMount(){
        this.props.getPosters(this.props.page,this.props.value);
      }
    getPosters = (page) => {
        this.props.getPosters(page, this.props.value)
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.value != prevProps.value){
            this.props.getPosters(this.props.page,this.props.value);
        }
      }

    render(){
        return(
            <Content searchPoster={this.props.searchPoster} 
            totalPostersCount={this.props.totalPostersCount}
            getPosters={this.getPosters}
            setSearchValue={this.props.setSearchValue}
            page={this.props.page}
            />
        )
    }
}


const mstp=(state) => ({
    totalPostersCount: state.reducer.totalPostersCount,
    value: state.reducer.value,
    page: state.reducer.page,
})

export default connect(mstp,{ getPosters,setSearchValue})(ContentContainer);