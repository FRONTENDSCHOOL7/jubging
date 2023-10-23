import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import LoginStart from "./pages/Login/LoginStart";
import SplashScreen from "./pages/SplashScreen/SplashScreen";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          <SplashScreen />
          <LoginStart />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
