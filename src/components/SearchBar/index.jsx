import { Input } from '../Input';
import { Button } from '../Button';
import { useDispatch } from "react-redux";
import { filterPopsThunk, filterAllThunks } from '../../store/modules/products/thunk'
import { Container } from './styles';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
  const dispatch = useDispatch()

  const handleClick = (filter) => {
    dispatch( filterAllThunks() )
    dispatch(filterPopsThunk(filter))
  }
  
  return (
    <Container>
      <Input placeholder='Digite seu pop favorito' onChange={(event) => handleClick(event.target.value)} />
      <Button><BsSearch size={12}/></Button>
    </Container>
  )
}