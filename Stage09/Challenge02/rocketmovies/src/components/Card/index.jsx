import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

export function Card({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Rating></Rating>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        provident quaerat explicabo soluta mollitia, sunt, voluptates voluptatum
        animi beatae blanditiis omnis similique error fuga! Magnam
        exercitationem dolore ullam rerum laborum.
      </p>
      <div>
        <Tag title="teste"></Tag>
        <Tag title="teste"></Tag>
        <Tag title="teste"></Tag>
        <Tag title="teste"></Tag>
      </div>
    </Container>
  )
}
