import React, { Component } from 'react'
import {connect} from 'react-redux'

 class NoteItem extends Component {
  changeEditStatus=()=>{
    this.props.changeEditStatus();
    this.props.getEditData(this.props.note);
    
  }
  deleteNote=()=>{
    this.props.deleteNote(this.props.note.key);
    this.props.alertOn("xóa thành công "+ this.props.note.noteTitle,"danger");

  }
    render() {
      // console.log("id"+this.props.note);
     
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
              <h5 className="mb-0">
        <a data-toggle="collapse" data-parent="#noteList" href={"#number"+this.props.stt} aria-expanded="true" aria-controls="noteContent1">
                  {this.props.noteTitle}
                </a>
                <div className="btn-group float-right">
                    <button type="button" className="btn btn-outline-info" onClick={()=>this.changeEditStatus()}>Sửa</button>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>this.deleteNote()}>Xóa</button>

                </div>
              </h5>
            </div>
            <div  id={"number"+this.props.stt} className="collapse in" role="tabpanel" aria-labelledby="note1">
              <div className="card-body">
                {this.props.noteContent}
              </div>
            </div>
          </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    getEditData :(editData)=>{
      dispatch({
        type:"GET_EDIT_DATA",
        editData
      })
    },
    deleteNote:(deleteId)=>{
      dispatch({
        type:"DELETE_NOTE",
        deleteId
      })
  },
  alertOn: (alertContent,alertStyle) => {
    dispatch({
      type:"ALERT_ON",alertContent,alertStyle
    })
  },
  alertOFF: () => {
    dispatch({
      type:"ALERT_OFF"
    })
  },
}
}
  export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);