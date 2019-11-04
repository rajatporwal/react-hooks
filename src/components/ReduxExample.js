import React from "react";
import {useSelector, useDispatch} from "react-redux";

export default () => {

    // useSelector is use to get state from store
    const counter = useSelector( (state) => state.counter);

    // useDispatch is use to dispatch state to reducer
    const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
          <h1>Counter : {counter} </h1>
          <button onClick={() => dispatch({type: "INCREMENT", payload: 10})}>INCREMENT</button>
          <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      </header>
    </div>
  );
};
