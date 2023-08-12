import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import lightTheme, { darkTheme } from "./Theme";
import MainPage from "./pages/MainPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const isDarkMode = useSelector((state) => state.pageMode.pageMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/*   <Route path="/logIn" element={<LogInPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/home" element={<Navigation />}>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
