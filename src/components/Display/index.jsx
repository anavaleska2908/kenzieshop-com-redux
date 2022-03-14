import { CardShowcase } from "../CardShowcase";
import { useSelector } from "react-redux";
import { Container } from "./styles";

export const Display = () => {
  const products = useSelector( ( store ) => store.products )
  return (
    <Container>
      { products.map( ( item ) => {
        return (
          <CardShowcase
            key={ item.id }
            item={item}
          />
        )
      })}
    </Container>
  )
}
