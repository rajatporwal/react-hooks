import React, { useState, useMemo } from "react";
import {useLocation, useHistory} from "react-router"
import Child from './MemoChild';

export default () => {


    // use for fetching multiple parameters from Link.
    const location = useLocation();
    console.log(location);

    // for going back or forward to pages
    const history = useHistory();
    const [i, setI] = useState(0);

    const onClickHandle = () => {
        setI(i+1);
    }

    const memoChild = useMemo(() => {
        return <Child />
    }, [i]);        // if we do not pass i here i.e. [] then it will only call at initial rendering.
                    // on passing i it will get called whenever i gets updated.

    const goBackHandler = () => {
      history.goBack();
    }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Memo: {location.state.from}</h3>
        <h2>i : {i}</h2>
        <button onClick={onClickHandle}>Increment</button>
        {
            // for passing parameter
            // <button onClick={onClickHandle.bind(this, 1)}>Increment I</button> 
        }
        <h2>Normal Render for child component</h2>
        <Child />
        <h2>Memo Render</h2>
        {memoChild}

        <button onClick={goBackHandler}>Go Back</button>
      </header>
    </div>
  );
};
