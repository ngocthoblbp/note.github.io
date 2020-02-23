import React,{Component} from 'react';
import '../App.css';
// import {noteData} from './firebaseConnect';
import Nav from './Nav';
import ListNote from './listNote';
import {connect} from 'react-redux'
import AddNew from './addNew';
import AlertInfo from './alertInfo';

class App extends Component {
  showEditFrom=()=>{
    if(this.props.isEdit){
      return <AddNew/>
    }
  }

  render() {
    // console.log(this.props.isEdit)
  return (
    <div>
      <Nav/>
      <AlertInfo/>
      <div className="container">
        <div className="row">
          <ListNote/>
          {this.showEditFrom()}
  
          
        </div>  
      </div>
    </div>
  )
  
    
}

  }
  const mapStateToProps = (state, ownProps) => {
    return {
      isEdit: state.isEdit
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      }
    }

  }

    export default connect(mapStateToProps, mapDispatchToProps)(App);