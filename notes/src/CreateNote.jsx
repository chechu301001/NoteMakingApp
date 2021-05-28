import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const CreateNote = (props) => {
    //initial is empty title and content.
    const [note, setNote] = useState({
        title:"",//list of objects
        content:"",
    });

    const expandIt = () => {
        setExpand(true);
    };

    const InputEvent = (event) => {
        //name and value attributes are being recognized. we can get those vals
        //name is title or content whereas value is what is typed in either.
        const {name, value} = event.target; //what the user is typing
        //destructured.
        //setting new value
        setNote((prevData) => {
            return {
                //predata carries all the data
                ...prevData,//this is also a list hence with ,
                [name]:value,//if title then val of title
            };
        });
    };

    const [expand, setExpand] = useState(false);

    const addEvent = () => {
        setExpand(false);
        props.passNote(note);//Notes must be added in App.jsx
        //This is uses props to connect from here to app attribute
        //that attribute calles addnote function!Cool
        //note currrent value is being passed there
        setNote({
            title:"",//list of objects
            content:"",//we have to make it empty again.
        });
    };
        

    return(
        <>
            <div className="main-note">
                <form>
                    <input 
                        type="text" 
                        value={note.title} //dynamic
                        name="title"
                        onChange={InputEvent} 
                        placeholder="Title"
                        onClick={expandIt}
                        maxLength="14"
                    />

                    <textarea 
                        rows=""
                        column="" 
                        name="content"
                        value={note.content} 
                        onChange={InputEvent} 
                        placeholder="Write a note..." 
                        autoComplete="off"
                        maxLength="60"
                    ></textarea>
                    {expand?    
                    <Tooltip title="Add Note" arrow placement="left">
                        <Button onClick={addEvent} variant="contained" color="primary" className="plus-button">
                            <AddIcon className="plus-sign"/>
                        </Button>
                    </Tooltip> 
                    : null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;