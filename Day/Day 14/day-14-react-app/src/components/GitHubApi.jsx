import { useState, useEffect } from "react";

// GitHubProfile demonstrates:
// - Fetching data based on a prop (username)
// - Handling loading and error states
// - Conditional rendering based on state
function GitHubProfile({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when username changes
    setLoading(true);
    setError(null);
    setData(null);

    // Fetch GitHub user profile
    // back tick: `
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]); // re-run when username changes

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div className="fetch-box">Error: {error}</div>;
  }

  return (
    <div className="fetch-box">
      <h2>GitHub Profile</h2>
      <img
        src={data.avatar_url}
        alt={data.login}
        width={80}
        style={{ borderRadius: "50%" }}
      />
      <h3>{data.name || data.login}</h3>
      <p>{data.bio || "No bio available"}</p>
      <p>Public repos: {data.public_repos}</p>
    </div>
  );
}

export default GitHubProfile;