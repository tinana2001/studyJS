
import React from 'react';
import CompContent from "./compContent";
import { connect } from "react-redux";
import { getUserProfile} from "../../redux/profile-reducer";
import { authRedirect } from '../../hoc/authRedirect';
import { useParams } from 'react-router-dom';

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

let AuthRedirectComponent =authRedirect(compContentContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const WhitsUrlContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(WhitsUrlContainerComponent);
