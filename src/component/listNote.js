import React, { Component } from 'react';
import NoteItem from './noteItem';
import {noteData} from './firebaseConnect';

class listNote extends Component {
  constructor(props) {
    super(props)
    this.state={
      dataFirebase:[]
    }
  }
  
  componentWillMount() {
    noteData.on('value',(notes)=>{
      var arrData=[];
      notes.forEach(element=>{
        const key =element.key;
        const noteTitle =element.val().noteTitle;
        const noteContent=element.val().noteContent;
        arrData.push({
          key:key,
          noteTitle:noteTitle,
          noteContent:noteContent
        });       
      });
      this.setState({
        dataFirebase:arrData,
      });
    });
    
    
  }
  
  getData=()=>{
   if(this.state.dataFirebase){
     return this.state.dataFirebase.map((value,key)=>{
              return(
                <NoteItem 
                note={value}
                key={key}
                stt={key}
                noteTitle={value.noteTitle}
                noteContent={value.noteContent}

                 />
              )

     })
   }
    
  }

    render() {
      this.getData();
        return ( 
          
          <div className="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">
              {this.getData()}
            </div>
          </div>

        );
    }
}

export default listNote;