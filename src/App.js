import "./App.css";
import React, { useEffect, useState } from "react";
import AppContainer from "./Components/AppContainer/AppContainer";
import { createFilter } from "./utils/common";
import { getRows } from "./helpers/getRows";
import { filterRowsByClient } from "./helpers/filterRowsByClient";
import { getHeaderRow } from "./helpers/getHeaderRow";

const App = () => {
  //Cleaned up loader to start in an undefined state
  const [loadingClients, setLoadingClients] = useState();
  const [loadingHeaderRow, setLoadingHeaderRow] = useState();
  const [loadingRows, setLoadingRows] = useState();
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [rows, setRows] = useState([]);
  const [rowsRendered, setRowsRendered] = useState([]);
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    msg: "",
  });
  const [modeFilter, setModeFilter] = useState({});
  const [statusFilter, setStatusFilter] = useState({});
  const [headerRow, setHeaderRow] = useState([]);

  //Deberia tener unas rows que me traigo iniciales y que permanecen intactas como const
  //Y un rowsRendered al que inicializo con las rows que me traigo
  //Me armo una copia de esas rows iniciales
  //Para filtrarlas por status
  //Y filtradas, se las seteo al render
  //Cuando quiero vovler a filtrar, uso la data que me copié

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
      //Saving initial data that will be untouched
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
      rowsRendered={rowsRendered}
      setRowsRendered={setRowsRendered}
    />
  );
};

export default App;
