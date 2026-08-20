import { useState } from "react";

// SimpleNameForm demonstrates:
// - Controlled input with a single field
// - Using useState to manage input value
// - Handling onChange event
function SimpleNameForm() {
  // state to hold the current name
  const [name, setName] = useState("");

  // Update state when input changes
  function handleChange(event) {
    setName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
    alert("Submitted name: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Name Form</h2>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>

      <button type="submit">Submit</button>

      <p>Current value: {name}</p>
    </form>
  );
}