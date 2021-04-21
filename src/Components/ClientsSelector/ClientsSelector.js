import React from "react";
import * as ui from "./styles";

const ClientSelector = ({ clients, handleClientSelect }) => {
  return (
    <>
      <ui.ChipsContainer>
        {clients
          .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))
          .map((client) => (
            <ui.Chip
              value={client}
              onClick={(e) => handleClientSelect(e, client)}
            >
              {client}
            </ui.Chip>
          ))}
        <ui.SelectAllChip>
          <ui.Chip selectAll onClick={(e) => handleClientSelect(e, "all")}>
            Select all shipments
          </ui.Chip>
        </ui.SelectAllChip>
      </ui.ChipsContainer>
    </>
  );
};

export default ClientSelector;
