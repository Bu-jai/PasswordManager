import React from "react";
import { nanoid } from "nanoid";
import { Modal, Button, TextInput, PasswordInput } from "@mantine/core";

export default function AddModal(props) {
  const [website, setWebsite] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function closeModal() {
    props.setAddOpened(false);
  }

  function addItem(event) {
    event.preventDefault();
    const id = nanoid();
    props.setItems((prevItems) => [
      ...prevItems,
      { id, website, name, password },
    ]);
    props.setAddOpened(false);
  }

  return (
    <Modal
      opened={props.addOpened}
      onClose={() => props.setAddOpened(false)}
      withCloseButton={false}
    >
      <h1 className="modal-title">Add Item</h1>
      <hr />
      <form onSubmit={addItem}>
        <TextInput
          className="input-margin"
          label="Website"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <TextInput
          className="input-margin"
          label="Username"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PasswordInput
          className="input-margin"
          label="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="addm-button-container">
          <Button className="addm-button" radius="lg" type="submit">
            Save
          </Button>
          <Button className="addm-button" radius="lg" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
