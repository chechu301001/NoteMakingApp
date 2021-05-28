import React from 'react';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>Your Notes <NotesRoundedIcon style={{ fontSize: 35 }}/></h1>
            </div>
        </>
    );
};
export default Header;