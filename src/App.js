import React from 'react'
import Item from './components/Item'
import AddModal from './components/AddModal'
import PassSettingsModal from './components/PassSettingsModal'
import { Button, SimpleGrid } from '@mantine/core'

export default function App() {
  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('items')) || [])
  const [addOpened, setAddOpened] = React.useState(false)
  const [passSetOpened, setPassSetOpened] = React.useState(false)
  // Password Settings-----------
  const [length, setLength] = React.useState(15)
  const [capitalLetters, setCapitalLetters] = React.useState(false)
  const [numbers, setNumbers] = React.useState(false)
  const [symbols, setSymbols] = React.useState(false)

  // console.log(length, capitalLetters, numbers, symbols)

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  function addModal() {
    setAddOpened(true)
  }

  function passSetModal() {
    setPassSetOpened(true)
  }

  function findItem(id) {
    return items.find((item) => item.id === id)
  }

  const itemElements = items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      item={item}
      findItem={findItem}
      setItems={setItems}
      length={length}
      capitalLetters={capitalLetters}
      numbers={numbers}
      symbols={symbols}
    />
  ))

  return (
    <div className="app">
      <div className="app-main">
        <h1 className="title">Gimme Your Passwords</h1>
        <div className="home-button-container">
          <Button className="home-button" radius="lg" size="lg" full onClick={addModal}>
            Add Item
          </Button>
          <Button className="home-button" radius="lg" size="lg" full onClick={passSetModal}>
            Password Settings
          </Button>
        </div>
      </div>
      <AddModal
        addOpened={addOpened}
        setAddOpened={setAddOpened}
        items={items}
        setItems={setItems}
        length={length}
        capitalLetters={capitalLetters}
        numbers={numbers}
        symbols={symbols}
      />
      <PassSettingsModal
        passSetOpened={passSetOpened}
        setPassSetOpened={setPassSetOpened}
        length={length}
        setLength={setLength}
        capitalLetters={capitalLetters}
        setCapitalLetters={setCapitalLetters}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <SimpleGrid
        className="cards-container"
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: 950, cols: 2, spacing: 'sm' },
          { maxWidth: 550, cols: 1, spacing: 'sm' },
        ]}>
        {itemElements}
      </SimpleGrid>
    </div>
  )
}
