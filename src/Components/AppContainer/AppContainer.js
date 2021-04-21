import React from "react";
import Loader from "../Loader/Loader";
import TableData from "../TableData/TableData";
import Filters from "../Filters/Filters";
import ClientSelector from "../ClientsSelector/ClientsSelector";
import * as ui from "./styles";
import AddShipment from "../AddShipment/AddShipment";
import mainLogo from "../../images/main-logo.png";

const AppContainer = ({
  headerRow,
  selectedClient,
  setSelectedClient,
  clients,
  loadingClients,
  loadingRows,
  statusFilter,
  modeFilter,
  rows,
  setRows,
  form,
  setForm,
  sending,
  setSending,
}) => {
  const handleClientSelect = (e, client) => {
    e.stopPropagation();
    setSelectedClient(client);
  };

  return (
    <>
      <ui.Selector>
        <ui.MainLogo src={mainLogo} />
        <h1>Where is my shipment?</h1>
        <p>
          Please select the client you'd like to see shipments from, or choose
          select all to see all shipments being moved:
        </p>
        {loadingClients ? (
          <Loader />
        ) : (
          <ClientSelector
            clients={clients}
            handleClientSelect={handleClientSelect}
          />
        )}
      </ui.Selector>
      <ui.MainSection>
        {selectedClient &&
          (loadingRows ? (
            <Loader />
          ) : (
            <>
              <Filters
                modeFilter={modeFilter}
                statusFilter={statusFilter}
                rows={rows}
                setRows={setRows}
              />
              <TableData headerRow={headerRow} rows={rows} />
              <AddShipment
                modeFilter={modeFilter}
                statusFilter={statusFilter}
                form={form}
                setForm={setForm}
                sending={sending}
                setSending={setSending}
                headerRow={headerRow}
              />
            </>
          ))}
      </ui.MainSection>
    </>
  );
};

export default AppContainer;
