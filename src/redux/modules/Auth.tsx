import React from "react";
import { connect } from "react-redux";
import { RootState } from "..";
import {login, logout} from './user'
const mapStateToProps = (state: RootState) => ({
    username: state.user.username
})

const mapDispatchToProps = { login, logout}

type Props = ReturnType<typeof mapDispatchToProps & typeof mapStateToProps> 

const UnconnectedAuth: React.FC<Props> = props => {
    // do auth things here! 
    return <>{props.username}</>
}

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedAuth);