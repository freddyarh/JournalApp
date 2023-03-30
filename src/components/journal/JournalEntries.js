import React, { useEffect, useState } from 'react'
import { JournalEntry } from './JournalEntry';
import axios from 'axios';

export const JournalEntries = ({ entries }) => {

    const [entryData, setEntryData] = useState();

    useEffect(() => {
        loadEntriesData();
    }, [])

    const loadEntriesData = async() => {
        return await axios.get('http://localhost:3000/products')
            .then(function ({ data }) {
            // handle success
            setEntryData(data.product);
            console.log(data)
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    console.log(entryData)

    const numberTimes = [1,2,3];
    
    return (
        <div className="journal__entries">
           
           {
               numberTimes.map( (value, index) => (
                    <JournalEntry key={ value } />
               ))
           }

        </div>
    )
}
