import { useState } from "react";
import ChildA from "./ChidA"
import ChildB from "./ChildB"

function Parent() {
    const [number, setNumber] = useState(0);
  return (
    <div style={{border: "2px solid black", padding: "10px", margin: "20px"}}>
        <h3>Parent</h3>
        <button onClick={() => setNumber((number) => number + 1)}>+</button>
        <ChildA number={number} setNumber={setNumber}/>
        <ChildB number={number}/>
    </div>
  )
}

export default Parent