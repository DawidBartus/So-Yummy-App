import { Route, Routes } from "react-router";
import "./App.css";

import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/logIn" element={<LogInPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/" element={<Navigation />}></Route>
    </Routes>
  );
}

export default App;
