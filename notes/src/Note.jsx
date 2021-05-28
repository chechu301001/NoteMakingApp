import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';




const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);//dleteItem is there
        //Also sending the unique id of the the note
        //Now we can access it there in App.
    };
    return(
        <>
            <div className="note">
                <h2>{props.title}</h2>
                <div className="for-p-space">
                    <p>{props.content}</p>
                </div>
                <Tooltip title="Delete" arrow placement="right-end">
                    <button onClick={deleteNote} className="btn">
                        <DeleteOutlineIcon className="deleteIcon"/>
                    </button> 
                </Tooltip>
            </div>
        </>
    );
};

export default Note;