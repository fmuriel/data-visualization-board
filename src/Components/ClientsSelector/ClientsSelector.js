import React from "react";
import * as ui from "./styles";

const ClientSelector = ({ clients, setSelectedClient }) => {
  return (
    <>
      <ui.ChipsContainer>
        {clients
          .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))
          .map((client) => (
            <ui.Chip
              value={client}
              key={client}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedClient(client);
              }}
            >
              {client}
            </ui.Chip>
          ))}
        <ui.SelectAllChip>
          <ui.Chip
            onClick={(e) => {
              e.stopPropagation();
              setSelectedClient("all");
            }}
          >
            Select all shipments
          </ui.Chip>
        </ui.SelectAllChip>
      </ui.ChipsContainer>
    </>
  );
};

export default ClientSelector;
