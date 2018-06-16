import React from 'react';
import ReactDOM from 'react-dom';


const user = {
    name: "Vikki",
    luckyNumber: luckyNumber()
    };

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);

function luckyNumber() {
    return Math.floor(Math.random()*1000);
}


function greeting (User) {    
    let container = (
        <div className = "container">
            <h1>Hello {user.name}</h1>
            <h2 className = "text-muted">Your lucky number is: {user.luckyNumber}</h2>
        </div>
    );
    return container;
}



