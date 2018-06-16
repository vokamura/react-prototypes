import React from 'react';
import Table from './table';

const students = [
    {
        student: "Vikki",
        course: "Math",
        grade: 100
    },
    {
        student: "John",
        course: "Science",
        grade: 80
    },
    {
        student: "Cathi",
        course: "English",
        grade: 90
    }
];

function App(){
    // return <h1>My first React functional component</h1>;
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    );
}

export default App;