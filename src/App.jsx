import Accordion from "./components/accordion/accordion";
import { RandomColor } from "./components/randomcolor/index";
import { StarRating } from "./components/starRating/index";
import ImageSlider from "./components/imageSlider";
import LoadMoreData from "./components/loadMoreData";
import Practice from "./components/practice/prac";
import QrCodeGenerator from "./components/qrCode/index";
import LightDarkTheme from "./components/themeSwitch";
import { Theme } from "./components/themeSwitch/theme";
import ModalTest from "./components/modal/ModalTest";
import SearchAutocomplete from "./components/searchAutocomplete";
import TabsTest from "./components/customTabs/tabsTest";
import { QueryClient, QueryClientProvider } from "react-query";
import GithubProfileFinder from "./components/githubProfileFinder";
import TestUseFetch from "./components/useFetchHook/index";
import WindowResize from "./components/windowResize";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating stars={6} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkTheme /> */}
      {/* <Practice /> */}
      {/* <Theme /> */}
      {/* <ModalTest /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TabsTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <TestUseFetch /> */}
      <WindowResize />
    </>
  );
}

export default App;
