import { ThemeProvider } from "styled-components";
import BasicLayout from "./styles/BasicLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>여기에 컴포넌트 넣어서 테스트하면 됩니다</BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;
