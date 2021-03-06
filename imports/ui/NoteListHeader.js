import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Notes} from '../api/notes';
import {Session} from 'meteor/session';



export const NoteListHeader = (props) =>{
return(
<div>
 <button onClick = {()=>{props.meteorCall('notes.insert',(err,res)=>{
if(res){
props.Session.set('selectedNoteId',res);
}
});}
}>Create Note</button>
</div>

);

};
NoteListHeader.propTypes = {
meteorCall:React.PropTypes.func.isRequired,
Session:React.PropTypes.object.isRequired
}

export default createContainer(()=>{
 Meteor.subscribe('notes');
return{
meteorCall:Meteor.call,
Session
};
},NoteListHeader);
