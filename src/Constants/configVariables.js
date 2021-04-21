import { GoogleSpreadsheet } from "google-spreadsheet";

export const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
export const SHEET_ID = process.env.REACT_APP_SHEET_ID;
export const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
export const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
export const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
export const auth = {
  client_email: CLIENT_EMAIL,
  private_key: PRIVATE_KEY,
};
