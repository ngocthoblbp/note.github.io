import React, { Component } from 'react';
import {connect} from 'react-redux';

class addNew extends Component {
  constructor(props) {
    super(props);
    this.state={
      noteTitle:'',
      noteContent:'',
      id:''
    }
    
  }
  
  componentWillMount() {
    if(this.props.editData){
      this.setState({
        noteTitle:this.props.editData.noteTitle,
        noteContent:this.props.editData.noteContent,
        id:this.props.editData.key
      })
    }

  }
  
  isChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    console.log(this.state);

  }
  addData =(title,content)=>{
    if(this.state.id){
  
     
      var editObj={};
      editObj.id=this.state.id;
      editObj.noteTitle=this.state.noteTitle;
      editObj.noteContent=this.state.noteContent;
      this.props.getEdit(editObj);
      this.props.changeEditStatus();
      this.props.alertOn("Sửa thành công","success");

    } 
    else{
    var item={};
    item.noteTitle=title;
    item.noteContent=content;
    this.props.getData(item);
    console.log(this.state);
    this.props.changeEditStatus();
    this.props.alertOn("Thêm thành công","info");
   
    }
    


  }

  
    render() {
    

        return (
            <div className="col-4">
  <h3>NOTE</h3>
  <div className="form-group">
    <label htmlFor="noteTitle">Tiêu Đề Note</label>
    <input defaultValue={this.props.editData.noteTitle}  onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle"  placeholder="Tiêu đề ..." />
    {/* <small id="helpIdNoteTilte" class="form-text text-muted">Điền tiêu đề vào đây</small> */}
    <label htmlFor="noteContent">Nội dung Note</label>
    <textarea defaultValue={this.props.editData.noteContent}  onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent"  placeholder="Nội dung ..." />
    {/* <small id="helpIdNoteContent" class="form-text text-muted">Điền tiêu đề vào đây</small> */}
  </div>
  <button type="reset" onClick={(title,content)=>this.addData(this.state.noteTitle,this.state.noteContent)}  className="btn btn-primary btn-block">Lưu</button>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editData:state.editData
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    },
    getEdit: (getItem) => {
      dispatch({type:"EDIT",getItem})
    },
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
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

export default connect(mapStateToProps, mapDispatchToProps)(addNew);
