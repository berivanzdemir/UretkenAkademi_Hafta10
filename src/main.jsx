import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./componenets/styled/GLobalStyle.js";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./componenets/theme/theme.js";
import { SiteContextProvider } from "./Context/Sitecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </React.StrictMode>
);
