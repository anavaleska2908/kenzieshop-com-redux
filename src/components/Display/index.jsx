import { CardShowcase } from "../CardShowcase";
import { useSelector } from "react-redux";

export const Display = () => {
  const products = useSelector( ( store ) => store.products )
  return (
    <ul>
      { products.map( ( item ) => {
        return (
          <CardShowcase
            key={ item.id }
            item={item}
          />
        )
      })}
    </ul>
  )
}
