import React, { useState, useEffect } from "react";
import {useParams} from "react-router";

let born = false;
export default () => {

const [growth, setGrowth] = useState(0);
const [nirvana, setNirvana] = useState(false);

// useParams is for reading values from URL.
const {firstName,lastName} = useParams();

// [] behaves as componentWillMount, only calls one time.
// [nirvana] only runs when nirvana changes.
// no second parameter will run on every update, componentDidUpdate.

useEffect(() => {
    if(born) {
        document.title = "nirvana born";
    }
}, [nirvana]);      // always run on second parameter updates.


useEffect(() => {
    console.log('i m born');
}, []);             // if empty array is passed as a second parameter then useEffect is call when component is born.

useEffect(() => {
    if (born)
        console.log('make mistakes and learn');
    else 
        born = true;

    if (growth>70)
        setNirvana(true);
});                 // will run every time when state or props changes.

const growHandle = () => {
    setGrowth(growth + 10)
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect: {firstName + " " + lastName}</h2>
        <h3>growth: {growth}</h3>
        <button onClick={growHandle}>learn and grow</button>
      </header>
    </div>
  );
};
