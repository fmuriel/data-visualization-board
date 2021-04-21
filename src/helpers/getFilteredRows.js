import { getRows } from "./getRows";

export const getFilteredRows = async (selectedClient) => {
  try {
    let auxRows;
    const rowsData = await getRows();
    const shipment = [];

    if (selectedClient === "all") {
      auxRows = rowsData;
    } else {
      for (let i = 0; i < rowsData.length; i++) {
        rowsData[i].Client_Name === selectedClient &&
          shipment.push(rowsData[i]);
      }
      auxRows = shipment;
    }

    return auxRows;
  } catch (err) {
    console.log(err);
  }
};
