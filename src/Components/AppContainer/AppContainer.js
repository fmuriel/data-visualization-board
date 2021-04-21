import React from "react";
import Loader from "../Loader/Loader";
import TableData from "../TableData/TableData";
import Filters from "../Filters/Filters";
import ClientSelector from "../ClientsSelector/ClientsSelector";
import * as ui from "./styles";
import mainLogo from "../../images/main-logo.png";

const AppContainer = ({
  headerRow,
  selectedClient,
  setSelectedClient,
  clients,
  loadingClients,
  loadingRows,
  errorMessage,
  statusFilter,
  modeFilter,
  rows,
  setRows,
}) => {
  const handleClientSelect = (e, client) => {
    e.stopPropagation();
    setSelectedClient(client);
  };

  return (
    <>
      <ui.Selector>
        <ui.LogoWrapper>
          <ui.MainLogo src={mainLogo} />
        </ui.LogoWrapper>
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
              <TableData
                errorMessage={errorMessage}
                headerRow={headerRow}
                rows={rows}
              />
            </>
          ))}
      </ui.MainSection>
    </>
  );
};

export default AppContainer;
