import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          {/* <AppRouter /> */}
          <NotFound />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
