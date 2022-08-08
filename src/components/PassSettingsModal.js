import React from 'react'
import { Modal, Checkbox, Slider } from '@mantine/core'

export default function PassSettingsModal(props) {
  const { passSetOpened, setPassSetOpened, settings, setSettings } = props

  return (
    <Modal opened={passSetOpened} onClose={() => setPassSetOpened(false)} withCloseButton={false}>
      <h1 className="modal-title">Password Settings</h1>
      <hr />
      <h2 className="modal-description"> Choose how you would like your password to generate:</h2>
      <div className="password-settings">
        <Slider
          value={settings.length}
          onChange={(value) => setSettings({ ...settings, length: value })}
          min={5}
          max={100}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
        />
        <Checkbox
          label="Capital Letters"
          checked={settings.capitalLetters}
          onChange={(e) => setSettings({ ...settings, capitalLetters: e.target.checked })}
        />
        <Checkbox
          label="Numbers"
          checked={settings.numbers}
          onChange={(e) => setSettings({ ...settings, numbers: e.target.checked })}
        />
        <Checkbox
          label="Symbols"
          checked={settings.symbols}
          onChange={(e) => setSettings({ ...settings, symbol: e.target.checked })}
        />
      </div>
    </Modal>
  )
}
