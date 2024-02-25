import { ThemeProvider } from "styled-components";
import Header from "./componenets/Header";
import { GlobalStyle } from "./componenets/styled/GLobalStyle";
import { darkTheme,lightTheme } from "./componenets/theme";
import { useContext } from "react";
import { SiteContext } from "./Context/Sitecontext";
function App() {
  const {themeName}=useContext(SiteContext)
  return (
    <>
      <ThemeProvider theme={themeName==="light"?lightTheme:darkTheme}>
        <GlobalStyle />

        <Header />

        <div className="App">
          <br /> <br />
          <h1>Hello My Project..</h1>
          <h1>Nice coding..</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
