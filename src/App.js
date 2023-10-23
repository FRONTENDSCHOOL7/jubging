import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import Followers from "./pages/Follow/Followers";
// import Following from "./pages/Follow/Following";
// import AppRouter from "./routes/AppRouter";
// import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          {/* <AppRouter /> */}
          <Followers />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
