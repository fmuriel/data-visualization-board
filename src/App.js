import "./App.css";
import React, { useEffect, useState } from "react";
import AppContainer from "./Components/AppContainer/AppContainer";
import { createFilter } from "./utils/common";
import { getRows } from "./helpers/getRows";
import { filterRowsByClient } from "./helpers/filterRowsByClient";
import { getHeaderRow } from "./helpers/getHeaderRow";

const App = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [modeFilter, setModeFilter] = useState({});
  const [statusFilter, setStatusFilter] = useState({});
  const [headerRow, setHeaderRow] = useState([]);
  const [rows, setRows] = useState([]);
  const [rowsRendered, setRowsRendered] = useState([]);

  //Loading and errors
  const [loadingClients, setLoadingClients] = useState();
  const [loadingRows, setLoadingRows] = useState();
  const [loadingHeaderRow, setLoadingHeaderRow] = useState();
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    msg: "",
  });

  //On mount
  const filterClientsForChips = async () => {
    setLoadingClients(true);
    try {
      const rowsData = await getRows();
      const clientsArray = [];

      for (let i = 0; i < rowsData.length; i++) {
        !clientsArray.includes(rowsData[i].Client_Name) &&
          clientsArray.push(rowsData[i].Client_Name);
      }

      setClients(clientsArray);
      setLoadingClients(false);
    } catch (err) {
      console.log(err);
      setLoadingClients(false);
    }
  };

  //When selecting client
  const setFilters = async () => {
    try {
      const rowsData = await getRows();
      let modes = createFilter(rowsData, "Mode");
      setModeFilter(modes);

      let status = createFilter(rowsData, "Status");
      setStatusFilter(status);
    } catch (err) {
      console.log(err);
    }
  };

  const populateHeaderRow = async () => {
    setLoadingHeaderRow(true);
    try {
      setHeaderRow(await getHeaderRow());
      setLoadingHeaderRow(false);
    } catch (err) {
      console.log(err);
      setLoadingHeaderRow(false);
    }
  };

  const populateTable = async () => {
    setLoadingRows(true);
    setErrorMessage({
      status: false,
      msg: "",
    });
    try {
      const rowsData = await getRows();
      //Saving initial data that will be left untouched
      setRows(filterRowsByClient(selectedClient, rowsData));
      //Saving data to be filtered
      setRowsRendered(filterRowsByClient(selectedClient, rowsData));
      setLoadingRows(false);
    } catch (err) {
      console.log(err);
      setErrorMessage({
        status: true,
        msg:
          "There was an error rendering the table, please refresh and try again.",
      });
      setLoadingRows(false);
    }
  };

  useEffect(() => {
    filterClientsForChips();
  }, []);

  useEffect(() => {
    setFilters();
    populateHeaderRow();
    populateTable();
  }, [selectedClient]);

  return (
    <AppContainer
      clients={clients}
      selectedClient={selectedClient}
      setSelectedClient={setSelectedClient}
      statusFilter={statusFilter}
      modeFilter={modeFilter}
      headerRow={headerRow}
      rows={rows}
      rowsRendered={rowsRendered}
      setRowsRendered={setRowsRendered}
      loadingClients={loadingClients}
      loadingHeaderRow={loadingHeaderRow}
      loadingRows={loadingRows}
      errorMessage={errorMessage}
    />
  );
};

export default App;
