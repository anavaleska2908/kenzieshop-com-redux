import { Button } from '../Button';
import { subFromCartThunk } from '../../store/modules/cart/thunk'
import { useDispatch } from 'react-redux';

export const CardCart = ( { item } ) => {
  const dispatch = useDispatch();
  
  return (
    <li>
      <img src={ item.image } alt={ item.name } />
      <p>{ item.name }</p>
      <p>{ item.category }</p>
      <p>{ item.price }</p>
      <Button onClick={() => dispatch(subFromCartThunk(item))} >Remover do Carrinho</Button>
    </li>
  )
}