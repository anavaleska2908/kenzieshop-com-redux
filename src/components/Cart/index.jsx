import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CardCart } from "../CardCart"
import { Container, Content, EmptyCart, Total } from "./styles";

export const Cart = () => {
  const cart = useSelector( store => store.cart )
  
  useEffect( () => {
    localStorage.setItem( '@kenzieshop:cart', JSON.stringify( cart ) );
    console.log(localStorage)
  } , [cart])

  return (
    <Container>
      <div>
        <h4>Carrinho</h4>
      </div>
      <EmptyCart>
      {
        cart[ 0 ] !== undefined ? (
          <>
            <Content>
           
              { cart.map( ( item ) => {
                return (
                  <CardCart key={ item.id } item={ item }/>
                )
              })}
            </Content>
            <Total>
              <p>Total: </p>
              <p> 
                U$ { cart.reduce( ( previousValue, {price, count} ) => previousValue + (price * count), 0 ).toFixed( 2 ) }
              </p>
            </Total>
          </>
        )
        :
        (
          <>          
           <p>Sua sacola está vazia</p>
           <p>Adicione itens</p>
          </>
          
        )
      }
      </EmptyCart>
    </Container>
  )
}
