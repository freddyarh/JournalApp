import React from 'react';
import moment from 'moment';

export const JournalEntry = ({ value }) => {

    const { date } = value;
    const day = moment(date).format('dddd');
    const fullDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { value.title }
                </p>
                <p className="journal__entry-content">
                    { value.description }
                </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>{ day }</span>
                <h4>{ fullDate }</h4>
            </div>
            
        </div>
    )
}
