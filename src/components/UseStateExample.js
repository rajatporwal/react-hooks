import React, { useState } from "react";
export default () => {

  // age is state and setState is setter for the .
  const [age, setAge] = useState(0);                // here 0 is the initial .
  const [name, setName] = useState("John");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name:
            <input
              type="text"
              value={name}                            // name state can be directly use with out using this.state.name syntax.
              onChange={e => setName(e.target.value)} // setName to update state.
            />
          </p>
          <p>Age: {age}</p>

          <button onClick={() => setAge(age + 1)}>Increase Age</button>

          <p>
            State: {name}, {age}
          </p>
        </div>
      </header>
    </div>
  );
};
