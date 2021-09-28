import { useContext } from "react";
import { BuildFlagContext } from "./context";

export const useBuildFlag = () => {
  const { enabledFlags } = useContext(BuildFlagContext);

  const isEnabled = (featureName: string) => {
    return enabledFlags.includes(featureName);
  };

  return [isEnabled];
};
