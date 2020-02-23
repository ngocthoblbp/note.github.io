import {noteData} from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editData:{
        noteTitle:"",
        noteContent:""
    },
    alertShow:false,
    alertContent:'',
    alertStyle:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            // console.log('add ok '+JSON.stringify(action.getItem));
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}   
        case "GET_EDIT_DATA":
            return {...state,editData:action.editData}
        case "EDIT":
            console.log("da sua");
            noteData.child(action.getItem.id).update({
                noteTitle:action.getItem.noteTitle,
                noteContent:action.getItem.noteContent
            })
            // console.log("cập nhật thành công"+JSON.stringify(action.getItem));
            return {...state,editData:{
                noteTitle:"",
                noteContent:""
            }}
        case "DELETE_NOTE":
            // console.log(action.deleteId);
            noteData.child(action.deleteId).remove()
            return state
        case "ALERT_ON":
            return {...state,alertShow:true,alertContent:action.alertContent,alertStyle:action.alertStyle}
        case "ALERT_OFF":
            return {...state,alertShow:false}
            
            
        default:
            return state
    }
}
var store =redux.createStore(allReducer);
// store.subscribe(function(){
//     console.log(store.getState());
// });
export default store;