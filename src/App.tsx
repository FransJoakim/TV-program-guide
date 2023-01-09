import "./App.css";
import { Mock } from "./components/mock";
import { ContextProvider } from "./lib/state";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header"></header>
        <Mock></Mock>
      </div>
    </ContextProvider>
  );
}

export default App;
