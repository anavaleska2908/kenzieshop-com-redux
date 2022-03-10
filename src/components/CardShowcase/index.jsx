// import { useSelector } from "react-redux";
import { Button } from '../Button';
import { addToCartThunk } from '../../store/modules/cart/thunk';
import { useDispatch } from 'react-redux';

export const CardShowcase = ({ item }) => {
  // const {products} = useSelector((state) => state)
  const dispatch = useDispatch()
  
  // const product = item;

  return (
    <li>
      <img src={ item.image } alt={ item.name } />
      <p>{ item.name }</p>
      <p>{ item.category }</p>
      <p>{ item.price }</p>
    <Button onClick={() => dispatch(addToCartThunk(item))} >Adicionar ao Carrinho</Button>
    </li>
  )
}