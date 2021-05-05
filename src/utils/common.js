export const createFilter = (rowsData, prop) => {
  let filter = [];

  for (let i = 0; i < rowsData.length; i++) {
    prop === "Courier"
      ? !filter.includes(rowsData[i].Courier) &&
        filter.push(rowsData[i].Courier)
      : !filter.includes(rowsData[i].Status) && filter.push(rowsData[i].Status);
  }
  return filter;
};
