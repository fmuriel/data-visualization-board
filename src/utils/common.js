//Functional programming:
//Cleaned up this function to avoid it depending on external variables

//Before

// export const createFilter = (rowsData, filter, prop) => {
//   for (let i = 0; i < rowsData.length; i++) {
//     prop === "Mode"
//       ? !filter.includes(rowsData[i].Mode) && filter.push(rowsData[i].Mode)
//       : !filter.includes(rowsData[i].Status) && filter.push(rowsData[i].Status);
//   }
// };

//After
export const createFilter = (rowsData, prop) => {
  const filter = [];

  for (let i = 0; i < rowsData.length; i++) {
    prop === "Mode"
      ? !filter.includes(rowsData[i].Mode) && filter.push(rowsData[i].Mode)
      : !filter.includes(rowsData[i].Status) && filter.push(rowsData[i].Status);
  }
  return filter;
};
