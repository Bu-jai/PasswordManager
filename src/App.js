import React from 'react'
import Item from './components/Item'
import AddModal from './components/AddModal'
import { Button, SimpleGrid } from '@mantine/core'

export default function App() {
  const [items, setItems] = React.useState([])
  const [addOpened, setAddOpened] = React.useState(false)
  console.log(items)

  function addModal() {
    setAddOpened(true)
  }

  const itemElements = items.map((item) => <Item key={item.id} item={item} />)

  return (
    <div className="app">
      <div className="app-main">
        <h1 className="title">Gimme Your Passwords</h1>
        <Button className="add-button" radius="lg" size="lg" full onClick={addModal}>
          Add Item
        </Button>
      </div>
      <AddModal addOpened={addOpened} setAddOpened={setAddOpened} items={items} setItems={setItems} />
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
