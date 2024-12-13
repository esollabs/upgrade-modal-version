import UpgradeVersionModal from "./components/upgrade-version/upgrade-version-modal";
import pkg from "../package.json";
function App() {
  return (
    <div>
      <UpgradeVersionModal type="modal" packageJson={pkg} />
    </div>
  );
}

export default App;
