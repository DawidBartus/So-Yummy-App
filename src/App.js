import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import lightTheme, { darkTheme } from "./Theme";
import MainPage from "./pages/MainPage";
import NotFound from "./components/NotFound/NotFound";
import RegisterForm from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import DevComponents from "./pages/DevComponents";

function App() {
  const isDarkMode = useSelector((state) => state.pageMode.pageMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<RegisterForm />} />
        <Route path="/signIn" element={<LogInPage />} />
        <Route path="/home" element={<Navigation />}>
          <Route path="/home/Dev" element={<DevComponents />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
