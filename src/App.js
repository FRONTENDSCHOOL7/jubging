import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
// import AppRouter from "./routes/AppRouter";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          {/* <AppRouter /> */}
          <Search />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
