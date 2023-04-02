import React, { useEffect, useState } from 'react'
import { JournalEntry } from './JournalEntry';
import axios from 'axios';

export const JournalEntries = ({ entries }) => {

    const [entryData, setEntryData] = useState(null);

    useEffect(() => {
        loadEntriesData();
    }, [])

    const loadEntriesData = async() => {
        return await axios.get('http://localhost:3000/entries')
            .then(function (res) {
            // handle success
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
