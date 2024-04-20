import useWindowResize from "./useWindowResize";

export default function WindowResize() {
  const [height, width] = useWindowResize();
  return (
    <div>
      <h1>useWindowResize Hook</h1>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
