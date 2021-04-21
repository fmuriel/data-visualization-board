import "./App.css";
import React, { useEffect, useState } from "react";
import AppContainer from "./Components/AppContainer/AppContainer";
import { SHEET_ID, doc, auth } from "./Constants/configVariables";
import { createFilter } from "./utils/common";

const App = () => {
  const [loadingRows, setLoadingRows] = useState(false);
  const [loadingClients, setLoadingClients] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [rows, setRows] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [modeFilter, setModeFilter] = useState({});
  const [statusFilter, setStatusFilter] = useState({});
  const [headerRow, setHeaderRow] = useState([]);
  const [form, setForm] = useState({});
  const [sending, setSending] = useState(false);

  const getClientsFromSheet = async () => {
    setLoadingClients(true);
    try {
      await doc.useServiceAccountAuth(auth);

      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const rowsData = await sheet.getRows();

      const clientsArray = [];
      for (let i = 0; i < rowsData.length; i++) {
        !clientsArray.includes(rowsData[i].Client_Name) &&
          clientsArray.push(rowsData[i].Client_Name);
      }
      setClients(clientsArray);

      await sheet.loadHeaderRow();
      const headerRow = sheet.headerValues;
      setHeaderRow(headerRow);
    } catch (err) {
      console.log(err);
      setErrorMessage("There Was an error. Open your console to see it.");
    } finally {
      setLoadingClients(false);
    }
  };

  const getFilteredRows = async () => {
    setLoadingRows(true);
    try {
      await doc.useServiceAccountAuth(auth);
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const rowsData = await sheet.getRows();

      const shipment = [];
      const modes = [];
      const status = [];

      if (selectedClient === "all") {
        setRows(rowsData);
      } else {
        for (let i = 0; i < rowsData.length; i++) {
          rowsData[i].Client_Name === selectedClient &&
            shipment.push(rowsData[i]);
        }
        setRows(shipment);
      }

      createFilter(rowsData, modes, "Mode");
      setModeFilter(modes);

      createFilter(rowsData, status, "Status");
      setStatusFilter(status);
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "There was an error rendering the table, please refresh and try again."
      );
    } finally {
      setLoadingRows(false);
    }
  };

  useEffect(() => {
    getClientsFromSheet();
  }, []);

  useEffect(() => {
    getFilteredRows();
  }, [selectedClient]);

  return (
    <AppContainer
      headerRow={headerRow}
      selectedClient={selectedClient}
      setSelectedClient={setSelectedClient}
      clients={clients}
      loadingClients={loadingClients}
      loadingRows={loadingRows}
      statusFilter={statusFilter}
      modeFilter={modeFilter}
      rows={rows}
      setRows={setRows}
      form={form}
      setForm={setForm}
      sending={sending}
      setSending={setSending}
    />
  );
};

export default App;
