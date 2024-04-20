import useFetch from "./useFetch";

export default function TestUseFetch() {
  const [data, pending, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  if (pending) {
    return <h2>Data loading..</h2>;
  }
  if (error) {
    return <h2>Error occured. ${error}</h2>;
  }
  return (
    <div className="data">
      <h1>Use Fetch Hook</h1>
      <div>
        {data && data.length > 0
          ? data.map((user) => {
              return <div key={user.id}>{user.name}</div>;
            })
          : null}
      </div>
    </div>
  );
}
