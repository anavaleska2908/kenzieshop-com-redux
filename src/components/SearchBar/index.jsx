import { Input } from '../Input';
import { Button } from '../Button';
import { useDispatch } from "react-redux";
import { filterPopsThunk, filterAllThunks } from '../../store/modules/products/thunk'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const handleClick = (filter) => {
    dispatch( filterAllThunks() )
    dispatch(filterPopsThunk(filter))
  }
  
  return (
    <>
      <Input onChange={(event) => handleClick(event.target.value)} />
      <Button>Pesquisar</Button>
    </>
  )
}