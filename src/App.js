import { Route, Routes } from "react-router";
import "./App.css";

import Navigation from "./components/navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
      <Route path="/logIn" element={<LogInPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/" element={<Navigation />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
