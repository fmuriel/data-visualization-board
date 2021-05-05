import React from "react";
import Loader from "../Loader/Loader";
import TableData from "../TableData/TableData";
import Filters from "../Filters/Filters";
import ClientSelector from "../ClientsSelector/ClientsSelector";
import * as ui from "./styles";
import * as uiTable from "../TableData/styles";
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
  courierFilter,
  rows,
  rowsRendered,
  setRowsRendered,
}) => {
  return (
    <>
      <ui.Selector>
        <ui.LogoWrapper>
          <ui.MainLogo src={mainLogo} />
        </ui.LogoWrapper>
        <h1>Where is my package?</h1>
        <p>
          Please select the client you'd like to see shipments from, or choose
          select all to see all shipments being moved:
        </p>
        {loadingClients ? (
          <Loader />
        ) : (
          <ClientSelector
            clients={clients}
            setSelectedClient={setSelectedClient}
          />
        )}
      </ui.Selector>
      {/*The Main Section will only have to think about loading, rendering error or table once the user selects a client */}
      {selectedClient && (
        <ui.MainSection>
          {loadingRows ? (
            <Loader />
          ) : (
            <>
              {errorMessage.status && (
                <uiTable.TableContainer>
                  <tbody>
                    <uiTable.TableRow>{errorMessage.msg}</uiTable.TableRow>
                  </tbody>
                </uiTable.TableContainer>
              )}
              <Filters
                courierFilter={courierFilter}
                statusFilter={statusFilter}
                rows={rows}
                rowsRendered={rowsRendered}
                setRowsRendered={setRowsRendered}
              />
              <TableData
                errorMessage={errorMessage}
                headerRow={headerRow}
                rowsRendered={rowsRendered}
              />
            </>
          )}
        </ui.MainSection>
      )}
    </>
  );
};

export default AppContainer;
