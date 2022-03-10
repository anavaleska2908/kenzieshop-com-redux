import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { filterPopsThunk, filterAllThunks } from '../../store/modules/products/thunk'

const filters = [
  'Naruto',
  'Boruto',
  'One Piece',
  'Demon Slayer',
  'Fire Force',
  'Bleach',
  'My Hero Academia',
  'One Punch Man',
  'Avatar',
  'Pokémon',
  'InuYasha',
  'Marvel',
  'Disney',
  'Power Ranger',
  'Hunter X Hunter',
  'Harry Potter',
  'Yu-Gi-Oh',
  'Attack on Titan',
  'Fullmetal Alchemist',
  'Dragon Ball Z'
]

export const Menu = () => {
  const dispatch = useDispatch()

  const handleClick = (filter) => {
    dispatch( filterAllThunks() )
    dispatch(filterPopsThunk(filter))
  }

  return (
    <nav>    
      <Button onClick={() => dispatch(filterAllThunks())}>Todos</Button>
      {filters.map((filter, index) => <Button key={index} onClick={ () => handleClick(filter) }>{filter}</Button>)}
    </nav>
  )
}