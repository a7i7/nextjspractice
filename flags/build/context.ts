// file: context/FeatureToggleContext.ts
import React from "react";
import { PREDICATES_MAP } from "./flags";

const getFlags = (): string[] => {
  return Object.keys(PREDICATES_MAP).filter((flag: string) =>
    PREDICATES_MAP[flag]()
  );
};

export const BuildFlagContext = React.createContext({
  enabledFlags: getFlags(),
});
