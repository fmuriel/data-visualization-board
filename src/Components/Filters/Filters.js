import React, { useEffect, useState } from "react";
import * as ui from "../../Styles/common";
import { initialFilterValues } from "../../Constants/initialFilterValues";

const Filters = ({ rows, setRowsRendered, modeFilter, statusFilter }) => {
  const [filterStatus, setFilterStatus] = useState(initialFilterValues);

  useEffect(() => {
    //Spread to create a shallow copy
    //I don't want to touch the initial data because I will need that to keep on filtering
    //And if I want to unfilter the data, the rowsRendered will be setted to the initial value
    let auxArray = [...rows];

    if (filterStatus.mode !== "all") {
      auxArray = auxArray.filter((row) => row.Mode === filterStatus.mode);
    }

    if (filterStatus.status !== "all") {
      auxArray = auxArray.filter((row) => row.Status === filterStatus.status);
    }

    if (filterStatus.date !== "all") {
      const orderByDate = (a, b) => {
        if (filterStatus.date === "departure") {
          let dateA = new Date(a.Estimated_Departure);
          let dateB = new Date(b.Estimated_Departure);
          return dateA - dateB;
        } else if (filterStatus.date === "arrival") {
          let dateA = new Date(a.Estimated_Arrival);
          let dateB = new Date(b.Estimated_Arrival);
          return dateA - dateB;
        }
      };

      auxArray = [...auxArray].sort(orderByDate);
    }
    setRowsRendered(auxArray);
  }, [filterStatus]);

  const handleFilters = (e) => {
    e.stopPropagation();
    setFilterStatus({
      ...filterStatus,
      ...{ [e.target.name]: e.target.value },
    });
  };

  const resetFilters = (e) => {
    e.stopPropagation();
    setFilterStatus({
      ...filterStatus,
      ...initialFilterValues,
    });
  };

  return (
    <>
      <ui.ActionsContainer>
        <ui.ActionTitle>Filters</ui.ActionTitle>
        <ui.ActionBox>
          <ui.Action>
            <ui.ActionTag>Mode</ui.ActionTag>
            <ui.Selector name="mode" onChange={(e) => handleFilters(e)}>
              <option value="all">Select filter</option>
              {modeFilter.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </ui.Selector>
          </ui.Action>

          <ui.Action>
            <ui.ActionTag>Status</ui.ActionTag>
            <ui.Selector name="status" onChange={(e) => handleFilters(e)}>
              <option value="all">Select all</option>
              {statusFilter.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </ui.Selector>
          </ui.Action>

          <ui.Action>
            <ui.ActionTag>Estimated</ui.ActionTag>
            <ui.Selector name="date" onChange={(e) => handleFilters(e)}>
              <option value="all">Select filter</option>
              <option value="departure">Departure</option>
              <option value="arrival">Arrival</option>
            </ui.Selector>
          </ui.Action>

          <ui.Action>
            <ui.ResetButton onClick={(e) => resetFilters(e)}>
              Reset filters
            </ui.ResetButton>
          </ui.Action>
        </ui.ActionBox>
      </ui.ActionsContainer>
    </>
  );
};

export default Filters;
