//Functional programming:
//avoided repeating async await structure in a function if I have already done this at getRows, and keep this function as a pure filter

//Before
// export const getFilteredRows = async (selectedClient) => {
//   try {
//     let auxRows;
//     const rowsData = await getRows();
//     const shipment = [];

//     if (selectedClient === "all") {
//       auxRows = rowsData;
//     } else {
//       for (let i = 0; i < rowsData.length; i++) {
//         rowsData[i].Client_Name === selectedClient &&
//           shipment.push(rowsData[i]);
//       }
//       auxRows = shipment;
//     }

//     return auxRows;
//   } catch (err) {
//     console.log(err);
//   }
// };

//After
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
