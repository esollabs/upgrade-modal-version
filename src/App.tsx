import UpgradeVersionModal from "./components/upgrade-version/upgrade-version-modal";
import pkg from "../package.json";
function App() {
  return (
    <div className="relative h-[100dvh] w-full overflow-auto bg-[#00000F]">
      <div
        className="absolute bottom-0 left-0 right-0 h-full opacity-80"
        style={{
          backgroundImage: "url(/decoration.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      ></div>

      <div className="relative flex size-full flex-col items-center justify-center gap-2">
        <p className="text-2xl font-bold text-white">
          "Upgrade Modal Version" Package
        </p>
        <p className="relative px-4 text-center text-base font-normal text-white after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-0.5 after:translate-y-full after:bg-[linear-gradient(90deg,rgba(124,93,248,0),#7c5df8_49.77%,rgba(124,93,248,0))] after:content-['']">
          Specifically designed for PWA applications to help refresh cached
          content after updates.
        </p>
      </div>

      <UpgradeVersionModal type="popup" packageJson={pkg} />
    </div>
  );
}

export default App;
