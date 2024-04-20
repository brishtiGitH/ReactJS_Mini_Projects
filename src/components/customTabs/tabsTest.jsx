import Tabs from "./tabs";

function RandomCom() {
  return <div>Random Component content</div>;
}

export default function TabsTest() {
  const tab = [
    {
      label: "Tab 1",
      content: "Contents of Tab 1",
    },
    {
      label: "Tab 2",
      content: "Contents for the Tab 2",
    },
    {
      label: "Tab 3",

      content: "Hi from Tab 3",
    },
    {
      label: "Tab 4",
      content: <RandomCom />,
    },
  ];
  function handleTabChange(tab) {
    console.log(tab);
  }
  return <Tabs tabs={tab} onChange={handleTabChange} />;
}
