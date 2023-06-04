import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    useEffect(() => {
      console.log('hi')
    }, [])
    
    const data = [
        {
          name: 'Month A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Month B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Month C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
      ];
    return (
        <div className="notes__main-content"> 

            <NotesAppBar />
            <div className="notes__body-content">
                <div className="notes__graphic">
                    <h2>Some awesome title </h2>
                    <input 
                        type="text"
                        placeholder="Title"
                        className="notes__title-input"
                    />

                    <textarea
                        placeholder="What happend today"
                        className="notes__textarea"
                    ></textarea>

                    <div className="notes__image">
                        {/* <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&usqp=CAU"
                            alt="imgen"
                        /> */}
                        
                    </div>

                </div>
                <div className="notes__content">

                    <h2>Monthly Graphic</h2>

                    <div className="notes__image">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&usqp=CAU"
                            alt="imgen"
                        />
                    </div>

                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}