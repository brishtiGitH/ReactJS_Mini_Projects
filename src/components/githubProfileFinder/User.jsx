export default function User({ user }) {
  const {
    avatar_url,
    bio,
    name,
    login,
    html_url,
    followers,
    following,
    created_at,
  } = user;
  const createdPfpOn = new Date(created_at);
  return (
    <div>
      <img src={avatar_url} alt={name || login} />
      <h2>{name || login}</h2>
      <p>{bio}</p>
      <h3>Joined on {createdPfpOn.toDateString()}</h3>
      <a href={html_url} target="_blank">
        Profile
      </a>

      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}
