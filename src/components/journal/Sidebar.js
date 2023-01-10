import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';
import { entryModal } from './entryModal';
import { uiNewEntryModal } from '../../actions/ui';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch( startLogout() );
    }

    const handleNewEntry = () => {
        // dispatch( uiNewEntryModal() );
        entryModal('What is your new entry?');
    }
    return (
        <div>
            <aside className="journal__sidebar">
                
                <div className="journal__sidebar-navbar">
                    <h3 className="mt-1">
                        <i className="far fa-moon"></i>
                        <span> Fredy!!</span>
                    </h3>
                    <button className="btn" onClick={handleLogOut}>
                        Logout
                    </button>
                </div>
                <div className="journal__new-entry" onClick={ handleNewEntry }>
                    <i className="far fa-calendar-plus fa-5x"></i>
                        <p className="mt-1">
                            New entry
                        </p>
                </div>
                <JournalEntries />
            </aside>
        </div>
    )
}
