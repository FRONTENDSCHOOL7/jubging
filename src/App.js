import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
// import AppRouter from "./routes/AppRouter";
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          {/* <AppRouter /> */}
          <Home />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
