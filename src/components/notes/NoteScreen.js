import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content"> 
            
            <NotesAppBar />

            <div className="notes__body-content">
                <div className="notes__graphic">
                <input 
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                    />

                    <textarea
                        placeholder="What happend today"
                        className="notes__textarea"
                    ></textarea>

                    <div className="notes__image">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&usqp=CAU"
                            alt="imgen"
                        />
                    </div>

                </div>
                <div className="notes__content">

                    <input 
                        type="text"
                        placeholder="Monthly Graphic"
                        className="notes__title-input"
                    />

                    <div className="notes__image">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&usqp=CAU"
                            alt="imgen"
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}