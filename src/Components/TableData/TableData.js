import React from "react";
import * as ui from "./styles";

const Tabledata = ({ errorMessage, headerRow, rows }) => {
  return (
    <>
      {errorMessage.status && (
        <ui.TableContainer>
          <ui.TableRow>{errorMessage.msg}</ui.TableRow>
        </ui.TableContainer>
      )}
      <ui.TableContainer>
        <ui.TableRow>
          {headerRow.map((row) => (
            <th>{row}</th>
          ))}
        </ui.TableRow>
        {rows.length > 0 ? (
          rows.map((row, key) => (
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
      </ui.TableContainer>
    </>
  );
};

export default Tabledata;
