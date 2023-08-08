import "./App.css";
import MainContainer from "./components/MainContainer";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MainContainer>
        <Navigation />
      </MainContainer>
    </div>
  );
}

export default App;
