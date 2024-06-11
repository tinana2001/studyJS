
import React from 'react';
import CompContent from "./compContent";
import { connect } from "react-redux";
import { getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";

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
            userId=2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Navigate to="/Login"/>; 
        return (
           <CompContent {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

const WhitsUrlContainerComponent = withRouter(compContentContainer)
export default connect(mapStateToProps, {getUserProfile})(WhitsUrlContainerComponent);
