import { useEffect, useState } from "react";
import User from "./User";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchGithubProfile = async (getUser) => {
    try {
      setPending(true);
      const response = await fetch(`https://api.github.com/users/${getUser}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setUser(data);
        setPending(false);
        setUsername("");
      }
    } catch (error) {
      setError(error);
      setPending(false);
    }
  };
  if (error) {
    return <h2>Error occured. {error}</h2>;
  }
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        placeholder="Search profile.."
      />
      <button
        onClick={() => {
          username !== "" && fetchGithubProfile(username);
        }}
      >
        Find User
      </button>
      <h3>{pending && "Loading data..."}</h3>
      {user && <User user={user} />}
    </div>
  );
}
