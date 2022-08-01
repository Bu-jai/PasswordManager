import { Card, Title } from '@mantine/core'

export default function Item(props) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Title className="website-name" order={4} align="center">
        {props.item.website}
      </Title>
    </Card>
  )
}
