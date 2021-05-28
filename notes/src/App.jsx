import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
//Never worry about data type
//Variables can handle anything

const App = () => {
    const [addItem, setAddItem] = useState([]);//array of items
    const addNote = (note) => {
        if(note.title===""){
            alert("Please enter a Note to Add");
        }else {
            setAddItem((prevData)=>{
                return [...prevData, note];
            });
        }
        
    };
    const onDelete = (id) => {
        setAddItem((olddata) =>
            olddata.filter((currdata, indx) =>{
                return indx !== id;//show which ever is NOT Equal
            })
        );
    };

    return(
        <>
            <Header/>
            <CreateNote passNote={addNote}/>{/*props pass, new custom attribute*/}
            {
            addItem.map((val, index)=>{//mapping through array of notes
                return <Note
                    key={index}//since we need unique key
                    id={index}
                    title={val.title}//list hence '.'
                    content={val.content}
                    deleteItem={onDelete}
                />
            })
            }
            <Footer/>
        </>
    );
};

export default App;
