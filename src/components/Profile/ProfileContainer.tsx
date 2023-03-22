import React, {FC} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type mapStateToPropsType = {
    profile:ProfilePropsType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePropsType)=>void
}
type PathParamsType = {
    userId:string
}

type ownPropsType = mapDispatchToPropsType & mapStateToPropsType

type ProfileContainerType = RouteComponentProps<PathParamsType> & ownPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '23540'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`+userId)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }

};

let mapStateToProps = (state:AppRootStateType):mapStateToPropsType => ({
    profile:state.profilePage.profile
})


//let withUrlDataContainerComponent = withRouter(ProfileContainer)

//export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
export default compose<FC>(connect(mapStateToProps, {setUserProfile}), withRouter)(ProfileContainer)
