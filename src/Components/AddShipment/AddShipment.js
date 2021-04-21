import React, { useEffect, useState } from "react";
import * as ui from "../../Styles/reusableStyles";
import { SHEET_ID, doc, auth } from "../../Constants/configVariables";

const AddShipment = ({
  modeFilter,
  statusFilter,
  form,
  setForm,
  sending,
  setSending,
  headerRow,
}) => {
  const postShipmentToSheet = async () => {
    setSending(true);
    try {
      await doc.useServiceAccountAuth(auth);

      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.getRows();
      const newRow = await sheet.addRow(form);
    } catch (err) {
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  const handleInput = (e) => {
    e.stopPropagation();
    setForm({
      ...form,
      ...{ [e.target.name]: e.target.value },
    });
  };

  return (
    <ui.ActionsContainer addShipment>
      <ui.WipLabel>
        <ui.ActionTitle>
          Please not the component below is a WIP!
        </ui.ActionTitle>
      </ui.WipLabel>
      <ui.ActionTitle>Add Shipment</ui.ActionTitle>
      <ui.ActionBox>
        <ui.ActionForm onSubmit={postShipmentToSheet}>
          {headerRow.map((header) => {
            if (header === "Mode") {
              return (
                <>
                  <ui.Action>
                    <ui.ActionTag>{header}</ui.ActionTag>
                    <ui.Selector name="mode" onChange={(e) => handleInput(e)}>
                      {modeFilter.map((filter) => (
                        <option value={filter}>{filter}</option>
                      ))}
                    </ui.Selector>
                  </ui.Action>
                </>
              );
            } else if (header === "Status") {
              return (
                <>
                  <ui.Action>
                    <ui.ActionTag>{header}</ui.ActionTag>
                    <ui.Selector name="status" onChange={(e) => handleInput(e)}>
                      {statusFilter.map((filter) => (
                        <option value={filter}>{filter}</option>
                      ))}
                    </ui.Selector>
                  </ui.Action>
                </>
              );
            } else {
              return (
                <ui.Action>
                  <ui.ActionTag>{header}</ui.ActionTag>
                  <ui.AddShipInput
                    type="text"
                    name={header}
                    value={setForm[header]}
                    onChange={(e) => handleInput(e)}
                  />
                </ui.Action>
              );
            }
          })}
          <ui.Action>
            <ui.AddShipInput
              submit
              type="submit"
              value={sending ? "Adding..." : "Add Shiptment"}
            />
          </ui.Action>
        </ui.ActionForm>
      </ui.ActionBox>
    </ui.ActionsContainer>
  );
};

export default AddShipment;
