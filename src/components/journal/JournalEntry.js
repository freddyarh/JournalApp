import React from 'react'

export const JournalEntry = () => {

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
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Here we are to write our experiences and something else
                </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
}
