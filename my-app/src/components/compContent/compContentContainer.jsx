
import React from 'react';
import CompContent from "./compContent";
import { connect } from "react-redux";
import  axios from 'axios';
import { getUserProfile, setUserProfile } from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import { usersAPI } from '../../api/api';

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
        return (
           <CompContent {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WhitsUrlContainerComponent = withRouter(compContentContainer)
export default connect(mapStateToProps, {getUserProfile})(WhitsUrlContainerComponent);
