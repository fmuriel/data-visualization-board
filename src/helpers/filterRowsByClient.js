//Functional programming:
//avoided repeating async await structure in a function if I have already done this at getRows, and keep this function as a pure filter
export const filterRowsByClient = (selectedClient, rowsData) => {
  let shipment = [];

  if (selectedClient === "all") {
    return rowsData;
  } else {
    for (let i = 0; i < rowsData.length; i++) {
      rowsData[i].Client_Name === selectedClient && shipment.push(rowsData[i]);
    }
    return shipment;
  }
};
