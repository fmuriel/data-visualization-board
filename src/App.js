import "./App.css";
import React, { useEffect, useState } from "react";
import AppContainer from "./Components/AppContainer/AppContainer";
import { createFilter } from "./utils/common";
import { getRows } from "./helpers/getRows";
import { filterRowsByClient } from "./helpers/filterRowsByClient";
import { getHeaderRow } from "./helpers/getHeaderRow";

const App = () => {
  const [loadingClients, setLoadingClients] = useState(false);
  const [loadingHeaderRow, setLoadingHeaderRow] = useState(false);
  const [loadingRows, setLoadingRows] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [rows, setRows] = useState([]);
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    msg: "",
  });
  const [modeFilter, setModeFilter] = useState({});
  const [statusFilter, setStatusFilter] = useState({});
  const [headerRow, setHeaderRow] = useState([]);

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

  const setFilters = () => {
    let modes = createFilter(rows, "Mode");
    setModeFilter(modes);

    let status = createFilter(rows, "Status");
    setStatusFilter(status);
  };

  const populateTable = async () => {
    setLoadingRows(true);
    setErrorMessage({
      status: false,
      msg: "",
    });
    try {
      const rowsData = await getRows();
      setRows(filterRowsByClient(selectedClient, rowsData));
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
    populateHeaderRow();
    populateTable();
  }, [selectedClient]);

  useEffect(() => {
    setFilters();
  }, [rows]);

  return (
    <AppContainer
      headerRow={headerRow}
      selectedClient={selectedClient}
      setSelectedClient={setSelectedClient}
      clients={clients}
      loadingClients={loadingClients}
      loadingRows={loadingRows}
      loadingHeaderRow={loadingHeaderRow}
      errorMessage={errorMessage}
      statusFilter={statusFilter}
      modeFilter={modeFilter}
      rows={rows}
      setRows={setRows}
    />
  );
};

export default App;
