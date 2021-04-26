import React from "react";
import * as ui from "./styles";

const Tabledata = ({ headerRow, rowsRendered }) => {
  return (
    <>
      <ui.TableContainer>
        <thead>
          <ui.TableRow>
            {headerRow.map((row) => (
              <th key={row}>{row}</th>
            ))}
          </ui.TableRow>
        </thead>
        <tbody>
          {rowsRendered.length > 0 ? (
            rowsRendered.map((row, key) => (
              <ui.TableRow key={key}>
                <td>{row.Shipment_ID}</td>
                <td>{row.Client_Name}</td>
                <td>{row.Origin}</td>
                <td>{row.Destination}</td>
                <td>{row.Mode}</td>
                <td>{row.Estimated_Departure}</td>
                <td>{row.Estimated_Arrival}</td>
                <td>{row.Status}</td>
              </ui.TableRow>
            ))
          ) : (
            <ui.TableRow key="No results">
              <td>No results match your filter criteria</td>
            </ui.TableRow>
          )}
        </tbody>
      </ui.TableContainer>
    </>
  );
};

export default Tabledata;
