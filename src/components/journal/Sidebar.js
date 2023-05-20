import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';
import { EntryModal } from './EntryModal';
import { setEntry } from "../../actions/entry";
import CustomizedDialogs from '../modal/ModalDialog';

export const Sidebar = () => {

    const [getData, setGetData] = useState(false);

    const dispatch = useDispatch();
    const userName = useSelector( state => state.auth.name);

    const handleLogOut = () => {
        dispatch( startLogout() );
    }

    const loadDataEntries = () => {
        setGetData(prev => !prev);
    }

    const handleNewEntry = async() => {
        
        const text = await EntryModal();
        if(text.value !== undefined){
            const newEntry = {
              id: new Date().getTime(),
              description: text.value,
              done: false
            }
    
            dispatch(setEntry(newEntry));
        }

    }
    return (
        <div>
            <aside className="journal__sidebar">
                
                <div className="journal__sidebar-navbar">
                    <h3 className="mt-1">
                        <i className="far fa-moon"></i>
                        <span> Welcome { userName }!!</span>
                    </h3>
                    <button className="btn" onClick={handleLogOut}>
                        Logout
                    </button>
                </div>
                <div className="journal__new-entry">
                    <CustomizedDialogs loadDataEntries={ loadDataEntries }/>
                </div>
                <JournalEntries getData={ getData } />
            </aside>
        </div>
    )
}
