import { DAT_GHE } from "../constant";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    payload: ghe,
  };
};
