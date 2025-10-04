import Calculator from "./ui/Calculator";
import ToggleProvider from "./ui/Toggle";
import Toggle from "./ui/Toggle";

function App() {
  return (
    <div>
      <ToggleProvider>
        <Calculator />
      </ToggleProvider>
    </div>
  );
}

export default App;
