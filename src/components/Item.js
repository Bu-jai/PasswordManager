import React from 'react'
import EditModal from './EditModal'
import { Card, Title } from '@mantine/core'

export default function Item(props) {
  const [editOpened, setEditOpened] = React.useState(false)
  const { id, website, name, password } = props.findItem(props.id)

  function editModal() {
    setEditOpened(true)
  }

  return (
    <div>
      <EditModal
        editOpened={editOpened}
        setEditOpened={setEditOpened}
        id={id}
        website={website}
        name={name}
        password={password}
        setItems={props.setItems}
      />
      <Card className="card" shadow="sm" p="lg" radius="md" withBorder onClick={editModal}>
        <Title className="website-name" order={4} align="center">
          {props.item.website}
        </Title>
      </Card>
    </div>
  )
}
