export const createFilter = (rowsData, prop) => {
  let filter = [];

  for (let i = 0; i < rowsData.length; i++) {
    prop === "Mode"
      ? !filter.includes(rowsData[i].Mode) && filter.push(rowsData[i].Mode)
      : !filter.includes(rowsData[i].Status) && filter.push(rowsData[i].Status);
  }
  return filter;
};
