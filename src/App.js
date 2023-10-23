import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          <AppRouter />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
