import React from 'react';
import { connect } from 'react-redux';
import Posters from './Posters';
import Loader from '../../common/Loader/Loader';

class PostersContainer extends React.Component {
    render() {
        if(this.props.loading) return <Loader/>
        if(this.props.error.length) return <div>{this.props.error}</div>

        return (
            <Posters posters={this.props.posters}/>
        )
    }
}

const mstp = (state) => ({
    posters: state.reducer.posters,
    loading: state.reducer.loading,
    error: state.reducer.error,
})

export default connect(mstp)(PostersContainer)