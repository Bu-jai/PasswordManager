import React from 'react'
import usePassGenerate from '../usePassGenerate'
import { nanoid } from 'nanoid'
import { TbCopy, TbCheck, TbRotate } from 'react-icons/tb'
import { Modal, Button, TextInput, PasswordInput, CopyButton, ActionIcon } from '@mantine/core'

export default function AddModal(props) {
  const [website, setWebsite] = React.useState('')
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const generatedPassword = usePassGenerate(
    props.settings.length,
    props.settings.capitalLetters,
    props.settings.numbers,
    props.settings.symbols,
  )

  React.useEffect(() => {
    setWebsite('')
    setName('')
    setPassword('')
  }, [props.addOpened])

  function closeModal() {
    props.setAddOpened(false)
  }

  function addItem(event) {
    event.preventDefault()
    const id = nanoid()
    props.setItems((prevItems) => [...prevItems, { id, website, name, password }])
    props.setAddOpened(false)
  }

  function generatePassword() {
    setPassword(generatedPassword)
  }

  return (
    <Modal opened={props.addOpened} onClose={() => props.setAddOpened(false)} withCloseButton={false}>
      <h1 className="modal-title">Add Item</h1>
      <hr />
      <form onSubmit={addItem}>
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
        </div>
      </form>
    </Modal>
  )
}
