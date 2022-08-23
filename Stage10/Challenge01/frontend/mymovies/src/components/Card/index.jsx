import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

export function Card({ data, title, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Rating></Rating>
      <p>{data.description}</p>
      <div>
        {data.tags.map(tag => (
          <Tag key={tag.id} title={tag.name}></Tag>
        ))}
      </div>
    </Container>
  )
}
