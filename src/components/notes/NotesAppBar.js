import React from 'react';
import moment from 'moment';

export const NotesAppBar = () => {

    const date = moment().format('MMMM Do YYYY');

    return (
        <div className="notes__appbar">
            <span>{ date }</span>            

            <div>
                <button className="btn">
                    Picture
                </button>
                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
