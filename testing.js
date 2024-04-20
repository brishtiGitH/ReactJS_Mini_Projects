const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {});
    console.log(res);
    const apiData = await res.json();
    console.log(apiData);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
