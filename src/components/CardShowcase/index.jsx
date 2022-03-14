import { Button } from '../Button';
import { addToCartThunk } from '../../store/modules/cart/thunk';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Category, Context, ImgButton, Li } from './styles';

export const CardShowcase = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <Li>
      <ImgButton>
        <img src={ item.image } alt={ item.name } />
        <Button onClick={ () => dispatch( addToCartThunk( item ) ) }><MdAddCircle size={ 16 }/></Button>
      </ImgButton>

      <Category>
        <p>{ item.category }</p>
      </Category>

      <Context>
        <p>{ item.name }</p>
        <p>U$: { item.price }</p>
      </Context>
    </Li>
  )
}