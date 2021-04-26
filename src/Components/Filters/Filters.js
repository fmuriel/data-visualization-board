import React, { useEffect, useState } from "react";
import * as ui from "../../Styles/common";

const Filters = ({ rows, setRows, modeFilter, statusFilter }) => {
  const auxRows = rows;
  const [filterStatus, setFilterStatus] = useState({
    mode: "all",
    status: "all",
    date: "all",
  });

  useEffect(() => {
    let auxArray = auxRows;

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

    setRows(auxArray);
  }, [filterStatus]);

  const handleFilters = (e) => {
    e.stopPropagation();
    setFilterStatus({
      ...filterStatus,
      ...{ [e.target.name]: e.target.value },
    });
  };

  console.log(modeFilter, "mode filter");
  console.log(statusFilter, "status filter");

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
                <option value={filter}>{filter}</option>
              ))}
            </ui.Selector>
          </ui.Action>

          <ui.Action>
            <ui.ActionTag>Status</ui.ActionTag>
            <ui.Selector name="status" onChange={(e) => handleFilters(e)}>
              <option value="all">Select all</option>
              {statusFilter.map((filter) => (
                <option value={filter}>{filter}</option>
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
        </ui.ActionBox>
      </ui.ActionsContainer>
    </>
  );
};

export default Filters;
