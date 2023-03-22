import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    login:string | null
    isAuth:boolean
    setUserData:(userId: string, email:string | null, login:string|null)=>void
}

type mapStateToPropsType = {
    login:string | null
    isAuth:boolean
    email:string | null
    id:string
}



class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps = (state:AppRootStateType):mapStateToPropsType =>({
    isAuth:state.auth.data.isAuth,
    login:state.auth.data.login,
    email:state.auth.data.email,
    id:state.auth.data.userId
})
export default connect(mapStateToProps, {setUserData})(HeaderContainer)

