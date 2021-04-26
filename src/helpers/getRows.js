import { SHEET_ID, doc, auth } from "../constants/configVariables";

export const getRows = async () => {
  try {
    await doc.useServiceAccountAuth(auth);
    await doc.loadInfo();
    return await doc.sheetsById[SHEET_ID].getRows();
  } catch (err) {
    console.log(err);
  }
};
