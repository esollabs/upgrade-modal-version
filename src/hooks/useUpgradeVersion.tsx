import { animateModal } from "@/utils/animation";
import { wait } from "@/utils/common";
import { useEffect, useMemo, useState } from "react";

export interface PackageJson {
  version: string;
  [key: string]: any;
}

const useUpgradeVersion = (props: {
  packageJson: PackageJson;
  onBeforeUpgrade?: () => void;
}) => {
  const currentVersion = useMemo(
    () => localStorage.getItem("version") ?? undefined,
    [],
  );
  const targetVersion = useMemo(
    () => props.packageJson.version,
    [props.packageJson.version],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClose = async () => {
    if (animateModal("upgrade-modal-version", false)) {
      await wait(350);
    }
    setIsOpen(false);
  };

  const upgrade = async () => {
    try {
      if ("serviceWorker" in navigator) {
        if (!navigator.serviceWorker.controller) {
          throw new Error("No active service worker found.");
        }
        const registration = await navigator.serviceWorker.ready;
        if (registration.active) {
          if (props.onBeforeUpgrade) {
            props.onBeforeUpgrade();
          }
          setLoading(true);
          try {
            registration.active.postMessage({ type: "CLEAR_CACHE" });
          } catch (error) {
            setLoading(false);
            throw new Error(
              "Failed to send CLEAR_CACHE message to the service worker. Please ensure you have added the required cache-clearing code to your service worker.",
            );
          }

          localStorage.setItem("version", targetVersion);
          await wait(2000);
          if (typeof window !== "undefined") {
            window.location.reload();
          }
          setLoading(false);
          onClose();
        } else {
          throw new Error("Service worker is not active.");
        }
      } else {
        throw new Error("Service worker not supported");
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    if (!currentVersion) {
      localStorage.setItem("version", targetVersion);
      onClose();
    } else if (currentVersion !== targetVersion) {
      setIsOpen(true);
      async function play() {
        await wait(350);
        animateModal("upgrade-modal-version", true);
        await wait(400);
        animateModal("upgrade-version-modal-body", true);
      }
      play();
    }
  }, []);

  return {
    loading,
    isOpen,
    onClose,
    upgrade,
    currentVersion,
    targetVersion,
  };
};

export default useUpgradeVersion;
