// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productsList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProducts() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProducts(search: string) {
    const filteredProducts = productsList.filter(product => product.title.includes(search))

    setFilteredProducts(filteredProducts)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


