import React from 'react'
import { Modal, Checkbox, Slider } from '@mantine/core'

export default function PassSettingsModal(props) {
  return (
    <Modal opened={props.passSetOpened} onClose={() => props.setPassSetOpened(false)} withCloseButton={false}>
      <h1 className="modal-title">Password Settings</h1>
      <hr />
      <h2 className="modal-description"> Choose how you would like your password to generate:</h2>
      <div className="password-settings">
        <Slider
          value={props.length}
          onChange={props.setLength}
          min={5}
          max={100}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
        />
        <Checkbox
          label="Capital Letters"
          checked={props.capitalLetters}
          onChange={(e) => props.setCapitalLetters(e.target.checked)}
        />
        <Checkbox label="Numbers" checked={props.numbers} onChange={(e) => props.setNumbers(e.target.checked)} />
        <Checkbox label="Symbols" checked={props.symbols} onChange={(e) => props.setSymbols(e.target.checked)} />
      </div>
    </Modal>
  )
}
