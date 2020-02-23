import React, { Component } from 'react'
import {Alert,AlertContainer} from 'react-bs-notifier'
import { connect } from 'react-redux';


 class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOFF();

     }
    render() {
        if (this.props.alertShow === false) return null
        return (
            <AlertContainer>
                <Alert type={this.props.alertStyle} onDismiss={()=>this.handleDismiss()} timeout={1500}>
                   {this.props.alertContent}
                </Alert>

            </AlertContainer>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOFF: () => {
            dispatch({
              type:"ALERT_OFF"
            })
          },
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent:state.alertContent,
        alertStyle:state.alertStyle
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);
