import "./App.css";
import { EPG } from "./components/EPG";
import { ContextProvider } from "./lib/state";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        {/* <header className="App-header"></header> */}
        <EPG />
      </div>
    </ContextProvider>
  );
}

export default App;
