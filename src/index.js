import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "App";
import theme from "components/Theme/Theme";
import { store } from 'store/store';
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);
