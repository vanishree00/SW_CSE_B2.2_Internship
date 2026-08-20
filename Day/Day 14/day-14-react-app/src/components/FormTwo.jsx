import { useState } from "react";

// SignupForm demonstrates:
// - Multiple controlled inputs in one form
// - Using one state object for all fields
// - Updating fields using name and value
function SignupForm() {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Generic change handler for all inputs
  function handleChange(event) {
    const { name, value } = event.target;

    // Update only the field that changed
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted (check console for data)");
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Signup Form</h2>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;