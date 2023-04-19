import React, { useEffect, useState } from 'react'
import { JournalEntry } from './JournalEntry';
import axios from 'axios';

export const JournalEntries = ({ getData }) => {

    const [entryData, setEntryData] = useState(null);

    useEffect(() => {
        loadEntriesData();
    }, [getData])

    const loadEntriesData = async() => {
        return await axios.get('http://localhost:3000/journal/entries')
            .then(function (res) {
            setEntryData(res.data);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    if(!entryData) return null;
    
    return (
        <div className="journal__entries">
           
           {
               entryData.entries.reverse().map( (value, index) => (
                    <JournalEntry key={ index } value={ value }/>
               ))
           }

        </div>
    )
}
