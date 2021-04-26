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
  modeFilter,
  rows,
  setRows,
  rowsRendered,
  setRowsRendered,
}) => {
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
            setSelectedClient={setSelectedClient}
          />
        )}
      </ui.Selector>
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
                modeFilter={modeFilter}
                statusFilter={statusFilter}
                rows={rows}
                // setRows={setRows}
                rowsRendered={rowsRendered}
                setRowsRendered={setRowsRendered}
              />
              <TableData
                errorMessage={errorMessage}
                headerRow={headerRow}
                // rows={rows}
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
