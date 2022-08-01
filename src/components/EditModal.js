import React from 'react'
import { TbCopy, TbCheck, TbRotate } from 'react-icons/tb'
import { Modal, Button, TextInput, PasswordInput, CopyButton, ActionIcon } from '@mantine/core'

export default function EditModal(props) {
  const [website, setWebsite] = React.useState(props.website)
  const [name, setName] = React.useState(props.name)
  const [password, setPassword] = React.useState(props.password)

  React.useEffect(() => {
    setWebsite(props.website)
    setName(props.name)
    setPassword(props.password)
  }, [props.editOpened])

  function closeModal() {
    props.setEditOpened(false)
  }

  function editItem(event) {
    event.preventDefault()
    const id = props.id
    props.setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { id, website, name, password }
        }
        return item
      })
    })
    props.setEditOpened(false)
  }

  function deleteItem() {
    props.setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== props.id)
    })
    props.setEditOpened(false)
  }

  function generatePassword() {
    let length = 16,
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      password = ''
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(password)
  }

  return (
    <Modal opened={props.editOpened} onClose={() => props.setEditOpened(false)} withCloseButton={false}>
      <h1 className="modal-title">Edit Item</h1>
      <hr />
      <form onSubmit={editItem}>
        <div className="modal-input-container">
          <TextInput label="Website" required value={website} onChange={(e) => setWebsite(e.target.value)} />
          <CopyButton value={website}>
            {({ copied, copy }) => (
              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy} className="copyicon">
                {copied ? <TbCheck size={16} /> : <TbCopy size={16} />}
              </ActionIcon>
            )}
          </CopyButton>
        </div>
        <div className="modal-input-container">
          <TextInput label="Username" required value={name} onChange={(e) => setName(e.target.value)} />
          <CopyButton value={name}>
            {({ copied, copy }) => (
              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy} className="copyicon">
                {copied ? <TbCheck size={16} /> : <TbCopy size={16} />}
              </ActionIcon>
            )}
          </CopyButton>
        </div>
        <div className="modal-input-container">
          <PasswordInput label="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <CopyButton value={password}>
            {({ copied, copy }) => (
              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy} className="copyicon">
                {copied ? <TbCheck size={16} /> : <TbCopy size={16} />}
              </ActionIcon>
            )}
          </CopyButton>
          <ActionIcon className="generateicon" onClick={generatePassword}>
            <TbRotate />
          </ActionIcon>
        </div>
        <div className="modal-button-container">
          <Button className="modal-button" radius="lg" type="submit">
            Save
          </Button>
          <Button className="modal-button" radius="lg" onClick={closeModal}>
            Cancel
          </Button>
          <Button className="modal-delete-button" radius="lg" onClick={deleteItem}>
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  )
}
