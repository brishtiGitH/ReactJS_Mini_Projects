import { useEffect, useState } from "react";
import "./style.css";

export default function SearchAutocomplete() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUserName() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=50");
      const data = await response.json();
      console.log(data);
      if (data) {
        const firstNames = data.users.map((user) => user.firstName);
        setUserData(firstNames);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserName();
  }, []);
  const handleClick = (e) => {
    setUsername(e.target.innerText);
  };
  if (loading) {
    return <h2>Loading Data..</h2>;
  }
  if (error) {
    return <h2>Error Occured. {error}</h2>;
  }
  return (
    <div className="searchAutomate">
      <div className="input">
        <input
          value={username}
          type="text"
          placeholder="enter a name.."
          onChange={(e) => {
            setUsername(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div>
        {username.length > 1 &&
          userData.map((name, index) => {
            if (name.toLowerCase().indexOf(username) > -1)
              return (
                <li className="results" key={index} onClick={handleClick}>
                  {name}
                </li>
              );
          })}
      </div>
    </div>
  );
}
