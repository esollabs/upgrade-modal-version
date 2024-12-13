import useUpgradeVersion, { PackageJson } from "@/hooks/useUpgradeVersion";
import BottomModal from "../base-modal/bottom-modal";
import ZoomModal from "../base-modal/zoom-modal";
import UpgradeVersionBody from "./upgrade-version-body";

type UpgradeVersionModalProps = {
  packageJson: PackageJson;
  type?: "modal" | "popup";
  render?: {
    header?: JSX.Element;
    version?: (target: string, current?: string) => JSX.Element;
    button?: (loading: boolean, upgrade: () => Promise<void>) => JSX.Element;
    rocket?: {
      projectionModifier?: string;
      color?: string;
    };
  };
  containerClassName?: string;
  modalClassName?: string;
  onBeforeUpgrade?: () => void;
};

const UpgradeVersionModal = ({
  type = "modal",
  containerClassName,
  modalClassName,
  packageJson,
  ...props
}: UpgradeVersionModalProps) => {
  const { isOpen, onClose, loading, upgrade, currentVersion, targetVersion } =
    useUpgradeVersion({
      packageJson: packageJson,
      onBeforeUpgrade: props.onBeforeUpgrade,
    });

  const body = (
    <UpgradeVersionBody
      loading={loading}
      targetVersion={targetVersion}
      currentVersion={currentVersion}
      upgrade={upgrade}
      {...props.render}
      projectionModifier={props.render?.rocket?.projectionModifier}
      color={props.render?.rocket?.color}
    />
  );

  if (type === "modal") {
    return (
      <BottomModal
        hideIndicator
        containerClassName={containerClassName}
        isOpen={isOpen}
        onClose={onClose}
        className={`!overflow-visible ${modalClassName ?? ""}`}
      >
        {body}
      </BottomModal>
    );
  }
  return (
    <ZoomModal
      containerClassName={containerClassName}
      isOpen={isOpen}
      onClose={onClose}
      className={`!overflow-visible ${modalClassName ?? ""}`}
    >
      {body}
    </ZoomModal>
  );
};

export default UpgradeVersionModal;
