export const createFilter = (rowsData, filter, prop) => {
  for (let i = 0; i < rowsData.length; i++) {
    prop === "Mode"
      ? !filter.includes(rowsData[i].Mode) && filter.push(rowsData[i].Mode)
      : !filter.includes(rowsData[i].Status) && filter.push(rowsData[i].Status);
  }
};
