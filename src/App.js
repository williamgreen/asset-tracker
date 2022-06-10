import "./App.css";
import "./HoldingsList";
import HoldingsList from "./HoldingsList";
import "./HoldingsOverview";
import HoldingsOverview from "./HoldingsOverview";

function App() {
  return (
    <div>
      <HoldingsOverview />
      <HoldingsList />
    </div>
  );
}

export default App;
