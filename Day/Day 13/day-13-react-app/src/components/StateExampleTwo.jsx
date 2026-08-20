import { useState } from "react";
function ToggleText() {
    const [showText,setShowText] = useState(true);

    return(
        <div>
            <h2>Toggle Text</h2>

            <button onClick={()=>setShowText(!showText)}>{showText ? "Hide" : "Show"}</button>

            {showText && <p>Hello, now you can see me!!!</p>}
        </div>
    );
}
export default ToggleText;