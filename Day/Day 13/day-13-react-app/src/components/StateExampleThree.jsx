import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h5>Enter your name:</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name || "Guest"}</p>
    </div>
  );
}
export default NameInput;