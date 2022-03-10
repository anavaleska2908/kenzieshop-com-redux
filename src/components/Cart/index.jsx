import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CardCart } from "../CardCart"

export const Cart = () => {
  const cart = useSelector( store => store.cart )
  
  useEffect( () => {
    localStorage.setItem( '@kenzieshop:cart', JSON.stringify( cart ) );
    console.log(localStorage)
  } , [cart])

  return (
    <div>
      {
        cart[ 0 ] !== undefined ? (
          <>
            <ul>
              { cart.map( ( item ) => {
                return (
                  <CardCart key={ item.id } item={ item }/>
                )
              })}
            </ul>
            <div>
              <p>Total</p>
              <p>
                U$ { cart.reduce( ( previousValue, price ) => previousValue + price.price, 0 ).toFixed( 2 ) }
              </p>
            </div>
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
    </div>
  )
}