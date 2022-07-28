import { Modal, Button, TextInput, PasswordInput } from "@mantine/core";

export default function AddModal(props) {
  function closeModal() {
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
      <TextInput className="input-margin" label="Website" required />
      <TextInput className="input-margin" label="Username" required />
      <PasswordInput className="input-margin" label="Password" required />
      <div className="addm-button-container">
        <Button className="addm-button" radius="lg">
          Save
        </Button>
        <Button className="addm-button" radius="lg" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
