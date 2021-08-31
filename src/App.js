import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });


    return (
      <div class='layout'>
        <div class='text-button'>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Increment by 1</button>
          </div>
      </div>
    );
  }

export default App;
