import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import c from './Dialogs.module.css'
import MessageItem from "./Message/Message";


const Dialogs = (props) => {


    let dialogs = [
    {id: 1, name: 'Murvat'}, 
    {id: 2, name:  'Ayxan'},
    {id: 3, name: 'Ali'},
    {id: 4, name: 'Kamran'},
    {id: 5, name: 'Senan'}
   ]

    let messages = [
       {mes: 'Hi', id: 1},
       {mes: 'Hello', id:2},
       {mes: 'Whatever', id:3},
       {mes: 'However', id:4},
       {mes: 'Whoelse', id:5}
    ]

    let dialogElements = dialogs
    .map( d =><DialogItem name={d.name} id={d.id}/>
    );

    let messageElements = messages
    .map( m => <MessageItem message={m.mes} id={m.mes}/>
    ); 


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                     {dialogElements}
            </div>
            <div className={c.messages}>
                     {messageElements}            
                     </div>
        </div>
    )
}

export default Dialogs