import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  mainBg: "#1E1F28",
  mobileBg: "#1E1F28",
  mainTextColor: "#FAFAFA",
};
const lightTheme = {
  mainBg: "white",
  mobileBg: "#EBF3D4",
  mainTextColor: "#23262A",
};

function App() {
  const isDarkMode = useSelector((state) => state.pageMode.pageMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
      <Route path="/logIn" element={<LogInPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/" element={<Navigation />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
