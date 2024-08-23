import Nav from "./comp/nav"
import {BrowserRouter} from 'react-router-dom'
import Homeproduct from './comp/home_product'
import Rout from "./comp/rout"
import Footer from "./comp/footer" 
import { useState } from "react"
const App = () => {
  //Add To Cart
  const [cart, setCart] = useState([])

  //Shop Page product
  const [shop, setShop] = useState(Homeproduct)
    //Shop Search filter
const [search, setSearch] = useState('')
  //Shop catigory filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x
    })
    setShop(catefilter)
  }

  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  //Shop Search filter
const searchlength = (search || []).length === 0;
const searchproduct = () =>
{
if(searchlength) 
{
  alert('Please Search Something!')
  setShop(Homeproduct)
}
else
{
    const searchfilter = Homeproduct.filter((x) => 
    {
      return x.cat === search
    })
    setShop(searchfilter)
}
}
  //Add To Cart
const addtocart = (product) => 
{
  const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist)
    {
      alert('Product already added in cart!')
    }
    else
    {
      setCart([...cart, {...product, qty:1}])  
      alert('Product added to cart!') 
    }
}
console.log(cart);

  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App