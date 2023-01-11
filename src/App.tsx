import { EPG } from "./components/EPG";
import { ContextProvider } from "./lib/state";

function App() {
  return (
    <ContextProvider>
      <div className="h-screen w-screen text-white bg-stone-800 overflow-scroll">
        {/* <header className="App-header"></header> */}
        <EPG />
      </div>
    </ContextProvider>
  );
}

export default App;
