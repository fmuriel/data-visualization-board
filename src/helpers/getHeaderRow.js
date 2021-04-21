import { SHEET_ID, doc, auth } from "../Constants/configVariables";

export const getHeaderRow = async () => {
  try {
    await doc.useServiceAccountAuth(auth);
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.loadHeaderRow();
    return sheet.headerValues;
  } catch (err) {
    console.log(err);
  }
};
