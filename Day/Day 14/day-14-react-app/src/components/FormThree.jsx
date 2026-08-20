import { useState } from "react";

// ValidatedForm demonstrates:
// - Basic form validation
// - Showing error messages
// - Preventing submission when invalid
function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Simple validation function
  function validate() {
    const newErrors = {};

    // Check email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Check password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    // If there are errors, show them and stop
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // No errors: clear errors and submit
    setErrors({});
    alert("Form submitted successfully");
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Validated Form</h2>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidatedForm;