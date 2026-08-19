import { useState } from "react";
function Counter() {
    // Syntax
    // const [nameOfState,functionToModifyState] = useState(initialValue);
    const [count,setCount] = useState(0);

    return(
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>

            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default Counter;