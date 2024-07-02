
import React from 'react';
import CompContent from "./compContent";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { authRedirect } from '../../hoc/authRedirect';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()}; //совпадение url 
        return <Children {...props}  match={match}/>
    }
}

class compContentContainer extends React.Component {
	
    componentDidMount() {
        let userId =this.props.match.params.userId;
        if (!userId) {
            userId=31334;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        
        return (
           <CompContent {...this.props} profile={this.props.profile} status= {this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    authRedirect
)(compContentContainer);
