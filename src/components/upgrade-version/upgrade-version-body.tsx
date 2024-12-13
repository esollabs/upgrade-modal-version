import Rocket from "../icon/rocket";
import { ProgressButton } from "./progress-button";

const widthConfig = [0.51, 0.44, 0.37];

const rocketColor = `[--rocket-stroke:#232A75] [--rocket-body:white] [--rocket-foot:#00BAEE] [--rocket-window:#6ED8F2] [--rocket-head:#E93544]`;
const UpgradeVersionBody = ({
  loading,
  targetVersion,
  currentVersion,
  upgrade,
  header = HederDefault,
  version = VersionDefault,
  button,
  projectionModifier = "0.5rem",
  color = "#232A75",
}: {
  loading: boolean;
  targetVersion: string;
  currentVersion?: string;
  upgrade: () => Promise<void>;
  header?: JSX.Element;
  version?: (target: string, current?: string) => JSX.Element;
  button?: (loading: boolean, upgrade: () => Promise<void>) => JSX.Element;
  projectionModifier?: string;
  color?: string;
}) => {
  return (
    <div
      id="upgrade-version-modal-body"
      data-open={false}
      className="group w-full px-8 pb-4 pt-0 "
    >
      {/* Rocket */}
      <div className="w-full opacity-0 group-data-[open=true]:!opacity-100">
        <div
          className="relative max-h-[1rem] w-full transition-all duration-300 group-data-[open=true]:!max-h-[168px]"
          style={{
            aspectRatio: `1/${widthConfig[0] / 2}`,
          }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              height: `calc(100% + ${projectionModifier})`,
            }}
          >
            <div
              className="absolute left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2  opacity-10 "
              style={{
                top: projectionModifier,
                width: `${widthConfig[0] * 100}%`,
                maxWidth: `260px`,
              }}
            >
              <div
                className="animate-zoom-in size-full  rounded-full transition-all delay-150 duration-300"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </div>
            <div
              className="absolute left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2  opacity-15"
              style={{
                top: projectionModifier,
                width: `${widthConfig[1] * 100}%`,
                maxWidth: `241.8px`,
              }}
            >
              <div
                className="animate-zoom-in animate-zoom-in size-full  rounded-full transition-all delay-300 duration-300"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </div>
          </div>

          <div
            className="absolute left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              top: projectionModifier,
              width: `${widthConfig[2] * 100}%`,
              maxWidth: `224.874px`,
            }}
          >
            <div
              className="animate-zoom-in size-full  rounded-full transition-all delay-500 duration-300"
              style={{
                backgroundColor: color,
              }}
            ></div>
            <div
              className={`absolute left-1/2 top-1/2 w-[70%] -translate-x-[45%] -translate-y-1/2 ${rocketColor} `}
            >
              <div className="animate-zoom-in w-full  transition-all delay-500 duration-300">
                <Rocket />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="flex w-full flex-col items-center pt-2">
        {header}
        {button ? (
          button(loading, upgrade)
        ) : (
          <button
            data-load={loading}
            className="group mt-6 flex w-fit scale-100  items-center gap-2 rounded-full px-5 py-1.5 text-sm font-semibold text-white shadow transition-all data-[load=true]:scale-125 data-[load=true]:gap-0 data-[load=true]:px-2.5 data-[load=false]:pl-4"
            style={{
              backgroundColor: color,
            }}
            onClick={async () => {
              await upgrade();
            }}
          >
            <ProgressButton />
          </button>
        )}
        {version && version(targetVersion, currentVersion)}
      </div>
    </div>
  );
};

export default UpgradeVersionBody;

const HederDefault = (
  <>
    <div className="w-full text-center text-lg font-bold text-black">
      New version is available
    </div>
    <div className="w-full text-center text-sm font-light text-black">
      Update today for a great experience!
    </div>
  </>
);

const VersionDefault = (target: string) => {
  return (
    <div className="mt-4 w-full text-center text-sm font-light text-black/80">
      Version: {target}
    </div>
  );
};
